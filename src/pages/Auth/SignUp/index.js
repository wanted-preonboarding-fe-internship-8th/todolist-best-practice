import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../../../api/auth';
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
  RowContainer,
  LinkContainer,
  ErrorMessage,
} from './style';

const SignUp = () => {
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

  const onSignUp = async (e) => {
    e.preventDefault();
    await signUp(email, password)
      .then((response) => {
        const data = response;
        if (data) {
          localStorage.setItem('token', data['access_token']);
          navigate('/');
        }
      })
      .catch((error) => {
        setIsModalOpen({
          open: true,
          message: error.response.data.message,
        });
      });
  };

  return (
    <Wrapper onSubmit={onSignUp}>
      <h1>계정을 만드세요</h1>
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
        <Button text="계정 만들기" disabled={emailError | passwordError} />
        <RowContainer>
          <p> 이미 계정이 있으세요? </p>
          <LinkContainer onClick={() => navigate('/')}>
            로그인 하러 가기
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

export default SignUp;