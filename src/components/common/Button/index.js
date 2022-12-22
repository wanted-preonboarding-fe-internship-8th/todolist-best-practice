import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  width: 282px;
  height: 45px;
  margin-top: 10px;
  border-radius: 10px;
  background: var(--gradient-blue);
  outline: none;
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & .disabled {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: auto;
    color: var(--gray6);
    background-color: var(--gray3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Button({
  text,
  className = '',
  disabled = false,
  onClick,
}) {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      <div className={disabled ? 'disabled' : null}>{text}</div>
    </StyledButton>
  );
}
