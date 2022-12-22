import styled from 'styled-components';

export const Divider = styled.div`
  width: 200px;
  border: 0.5px solid var(--gray3);
  margin: 30px 0;
`;

export const LinkContainer = styled.div`
  cursor: pointer;
  color: var(--text-blue);
  text-decoration: none;
  p {
    margin-left: 10px;
  }
  .icon {
    margin-left: 5px;
  }
  div {
    display: flex;
  }
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
