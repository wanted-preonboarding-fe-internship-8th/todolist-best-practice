import { AiOutlineCheck } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleFill,
} from 'react-icons/ri';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const List = styled.ul`
  width: 500px;
  padding: 30px;
  border-radius: 10px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  cursor: pointer;
  color: #045de9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 400px;
  height: 45px;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  border-width: ${(props) => props.borderWidth};
  border-radius: ${(props) => props.borderRadius};
  padding: 4px 6px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
`;

export default function TodoList({ todos }) {
  const IconStyleSmall = { width: 20, height: 20, cursor: 'pointer' };
  const IconStyle = { width: 23, height: 23, cursor: 'pointer' };

  const mockTodos = [
    {
      id: 1,
      title: 'Todo 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Todo 3',
      isCompleted: false,
    },
  ];

  return (
    <>
      <List>
        {mockTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
        <InputWrapper>
          <Input
            name="todo"
            type="text"
            placeholder="항목을 추가하세요"
            borderWidth="1px"
            borderRadius="6px"
          />
          <Button>추가</Button>
        </InputWrapper>
      </List>
    </>
  );
}
