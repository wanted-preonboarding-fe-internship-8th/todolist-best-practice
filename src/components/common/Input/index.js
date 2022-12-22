import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  width: 280px;
  & .property {
    margin-right: 10px;
  }
  & .input {
    width: 280px;
    height: 45px;
    padding-left: 4px;
    background-color: var(--white);
    font-size: 16px;
    border: 1px solid var(--gray5);
    border-radius: 6px;
    ::placeholder {
      color: var(--gray6);
    }
    &:focus {
      outline: none;
    }
  }
  & .warning {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    line-height: 1.2;
    color: var(--error);
    font-size: 1em;
    p {
      font-size: 14px;
    }
  }
`;

export default function Input({
  className,
  value,
  type,
  placeholder = '',
  warningText,
  disabled,
  name,
  onClick,
  onChange,
}) {
  return (
    <StyledInput warningText={warningText} className={`${className}`}>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        onClick={onClick}
        name={name}
      />
      {warningText && (
        <div className="warning">
          <p>{warningText} </p>
        </div>
      )}
    </StyledInput>
  );
}
