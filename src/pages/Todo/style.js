import styled from 'styled-components';

export const Root = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: var(--gray1);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .inner {
    width: 560px;

    & .todo-input-wrapper {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    & .todo-list {
      width: 500px;
      padding: 30px;
      border-radius: 10px;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    }

    & .logout {
      width: 100%;
      button {
        margin: 0 auto;
      }
    }
  }
`;
