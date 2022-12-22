import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleFill,
} from 'react-icons/ri';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 2px;
  border: 1px solid #d6d6d6;
  // border-width: ${(props) => props.borderWidth};
  // border-radius: ${(props) => props.borderRadius};
  padding: 4px 6px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
`;

const Text = styled.span`
  width: 380px;
  margin: 15px;
  color: ${(props) => (props.isCompleted ? 'var(--grey6)' : 'var(--black)')};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  text-decoration-color: ${(props) =>
    props.isCompleted ? 'var(--grey6)' : 'var(--black)'};
`;

export default function TodoItem({ todo }) {
  const IconStyleSmall = { width: 20, height: 20, cursor: 'pointer' };
  const IconStyle = { width: 23, height: 23, cursor: 'pointer' };

  const { isCompleted, title } = todo;
  const [isEditing, setIsEditing] = useState(true);

  return (
    <Wrapper>
      {isCompleted ? (
        <RiCheckboxCircleFill style={IconStyle} />
      ) : (
        <RiCheckboxBlankCircleFill style={IconStyle} />
      )}
      {isEditing ? (
        <>
          <Input
            name="todo"
            type="text"
            placeholder="항목을 추가하세요"
            borderWidth="1px"
            borderRadius="6px"
          />
          <AiOutlineCheck style={IconStyleSmall} />
        </>
      ) : (
        <>
          <Text>{title}</Text>
          <FiEdit style={IconStyleSmall} />
        </>
      )}
      <BsTrash style={IconStyleSmall} />
    </Wrapper>
  );
}
