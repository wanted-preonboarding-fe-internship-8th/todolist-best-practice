import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleFill,
} from 'react-icons/ri';
import styled from 'styled-components';

import Input from '../common/Input';

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.span`
  width: 380px;
  margin: 15px;
  color: ${(props) => (props.isCompleted ? 'var(--gray6)' : 'var(--black)')};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  text-decoration-color: ${(props) =>
    props.isCompleted ? 'var(--gray6)' : 'var(--black)'};
  word-break: break-all;
`;

export default function TodoItem({
  todo,
  isEditing,
  editValue,
  onChangeEditValue,
  onChangeEditStatus,
  onUpdateTodo,
  onDeleteTodo,
}) {
  const IconStyleSmall = { width: 20, height: 20, cursor: 'pointer' };
  const IconStyle = { width: 23, height: 23, cursor: 'pointer' };

  return (
    <Wrapper>
      {todo.isCompleted ? (
        <RiCheckboxCircleFill
          style={IconStyle}
          onClick={() => onUpdateTodo(todo.id, todo.todo, false)}
        />
      ) : (
        <RiCheckboxBlankCircleFill
          style={IconStyle}
          onClick={() => onUpdateTodo(todo.id, todo.todo, true)}
        />
      )}
      {isEditing ? (
        <>
          <Input
            name="todo"
            type="text"
            width="400px"
            padding="4px 6px"
            borderRadius="2px"
            boxSizing="border-box"
            outline="none"
            placeholder="항목을 추가하세요"
            onChange={(e) => onChangeEditValue(e)}
            value={editValue}
          />
          <AiOutlineCheck
            style={IconStyleSmall}
            onClick={() => onUpdateTodo(todo.id, editValue, todo.isCompleted)}
          />
        </>
      ) : (
        <>
          <Text isCompleted={todo.isCompleted}>{todo.todo}</Text>
          <FiEdit style={IconStyleSmall} onClick={() => onChangeEditStatus()} />
        </>
      )}
      <BsTrash
        style={IconStyleSmall}
        onClick={() => {
          onDeleteTodo();
        }}
      />
    </Wrapper>
  );
}
