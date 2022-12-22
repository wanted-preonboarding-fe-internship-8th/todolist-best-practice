import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  width: ${(props) => props.width};

  & .input {
    width: ${(props) => props.width};
    height: 45px;
    padding: ${(props) => props.padding};
    background-color: var(--white);
    font-size: 16px;
    border: 1px solid var(--gray5);
    border-radius: ${(props) => props.borderRadius};

    outline: ${(props) => props.outline};
    box-sizing: ${(props) => props.boxSizing};

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
  width = '280px',
  padding = '0 0 0 4px',
  borderRadius = '6px',
  outline,
  boxSizing,
  placeholder = '',
  warningText,
  disabled,
  name,
  onClick,
  onChange,
  onKeyPress,
}) {
  return (
    <StyledInput
      warningText={warningText}
      className={`${className}`}
      width={width}
      padding={padding}
      borderRadius={borderRadius}
      outline={outline}
      boxSizing={boxSizing}
    >
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
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
