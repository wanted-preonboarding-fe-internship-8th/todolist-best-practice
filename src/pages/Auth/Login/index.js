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
import {
  IdPwContainer,
  Wrapper,
  ErrorMessage,
  RowContainer,
} from '../SignUp/style';

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
      <h1>안녕하세요!</h1>
      <IdPwContainer>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={handleEmailInput}
          className="user-input"
          placeholder="이메일 주소를 입력해주세요."
        />
        {emailError && (
          <div style={{ margin: '20px 0 10px 0' }}>
            <ErrorMessage>이메일 형식을 확인해주세요.</ErrorMessage>
          </div>
        )}
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordInput}
          className="user-input"
          placeholder="비밀번호를 입력해주세요."
        />
        {passwordError && (
          <div style={{ margin: '20px 0 10px 0' }}>
            <ErrorMessage>비밀변호는 8자 이상입니다.</ErrorMessage>
          </div>
        )}
        <Button text="로그인" disabled={emailError | passwordError} />
        <Divider />
        <RowContainer>
          <p>계정이 없으세요?</p>
          <LinkContainer onClick={() => navigate('/signup')}>
            <div>
              <p>회원가입 바로가기</p>
              <BsArrowUpRight className="icon" />
            </div>
          </LinkContainer>
        </RowContainer>
      </IdPwContainer>
      {isModalOpen.open && (
        <Modal
          text={isModalOpen.message}
          close="확인"
          onClose={() => setIsModalOpen({ ...isModalOpen, open: false })}
        />
      )}
    </Wrapper>
  );
};

export default Login;
