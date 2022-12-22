import styled from 'styled-components';

export const IdPwContainer = styled.form`
  max-width: 500px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: var(--gray1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LinkContainer = styled.div`
  margin: 10px;
  cursor: pointer;
  color: var(--black);
  text-decoration: none;
  &:hover {
    color: var(--text-blue);
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--error);
  font-size: 14px;
`;
