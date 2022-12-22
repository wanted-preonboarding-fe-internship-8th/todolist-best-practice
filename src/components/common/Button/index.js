import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: 10px;
  background: ${(props) => props.background};
  outline: none;
  color: ${(props) => props.color};
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
  width = '282px',
  height = '45px',
  margin = '10px 0 0 0',
  background = 'var(--gradient-blue)',
  color = 'var(--white)',
  disabled = false,
  onClick,
}) {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
      margin={margin}
      background={background}
      color={color}
    >
      <div className={disabled ? 'disabled' : null}>{text}</div>
    </StyledButton>
  );
}
