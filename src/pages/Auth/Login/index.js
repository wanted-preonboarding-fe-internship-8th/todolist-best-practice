import React, { useState, useEffect } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../../../api/auth';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Modal from '../../../components/common/Modal';
import {
  emailValidation,
  passwordValidation,
} from '../../../utils/validations';
import { IdPwContainer, Wrapper, RowContainer } from '../SignUp/style';

import { Divider, LinkContainer } from './style';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState({ open: false, message: '' });

  const handleEmailInput = ({ target }) => {
    if (emailValidation(target.value)) {
      setEmailError(false);
      setEmail(target.value);
      return;
    }
    setEmailError(true);
    setEmail(target.value);
  };

  const handlePasswordInput = ({ target }) => {
    if (passwordValidation(target.value)) {
      setPasswordError(false);
      setPassword(target.value);
      return;
    }
    setPasswordError(true);
    setPassword(target.value);
  };

  /**
   * post SignIn
   * @param {string} email
   * @param {string} password
   */
  const onSignIn = async (e) => {
    e.preventDefault();
    await signIn(email, password)
      .then((response) => {
        const data = response;
        if (data) {
          localStorage.setItem('token', data['access_token']);
          navigate('/todo');
        }
      })
      .catch((error) => {
        setIsModalOpen({
          open: true,
          message: error.response.data.message,
        });
      });
  };
  useEffect(() => {
    localStorage.getItem('token') && navigate('/todo');
  }, []);

  return (
    <Wrapper onSubmit={onSignIn}>
      <h1>μλνμΈμ!</h1>
      <IdPwContainer>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleEmailInput}
          className="user-input"
          placeholder="μ΄λ©μΌ μ£Όμλ₯Ό μλ ₯ν΄μ£ΌμΈμ."
          warningText={emailError ? 'μ΄λ©μΌ νμμ΄ μλλλ€.' : null}
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordInput}
          className="user-input"
          placeholder="λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ."
          warningText={passwordError ? 'λΉλ°λ²νΈλ 8μ μ΄μμλλ€.' : null}
        />
        <Button text="λ‘κ·ΈμΈ" disabled={emailError | passwordError} />
        <Divider />
        <RowContainer>
          <p>κ³μ μ΄ μμΌμΈμ?</p>
          <LinkContainer onClick={() => navigate('signup')}>
            <div>
              <p>νμκ°μ λ°λ‘κ°κΈ°</p>
              <BsArrowUpRight className="icon" />
            </div>
          </LinkContainer>
        </RowContainer>
      </IdPwContainer>
      {isModalOpen.open && (
        <Modal
          text={isModalOpen.message}
          close="νμΈ"
          onClose={() => setIsModalOpen({ ...isModalOpen, open: false })}
        />
      )}
    </Wrapper>
  );
};

export default Login;
