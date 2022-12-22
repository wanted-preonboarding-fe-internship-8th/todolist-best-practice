import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../api/todo';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Modal from '../components/common/Modal';
import TodoItem from '../components/todo/TodoItem';

export default function Todo() {
  const [todoInputValue, setTodoInputValue] = useState({
    post: '',
    update: '',
  });
  const [todos, setTodos] = useState();
  const [isEditTodoId, setIsEditTodoId] = useState();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState({ open: false, message: '' });

  /**
   * modal open
   * @param {string} message error text
   */
  const onModalOpen = (message) => {
    setIsModalOpen({
      open: true,
      message: message,
    });
  };

  /**
   * get todos
   */
  const onGetTodos = useCallback(async () => {
    await getTodos()
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => {
        onModalOpen(error.response.data.message);
      });
  }, []);

  /**
   * create todo
   * @param {string} value todo text
   */
  const onCreateTodo = async (value) => {
    await createTodo(value)
      .then(() => {
        onGetTodos();
        setTodoInputValue({ ...todoInputValue, post: '' });
      })
      .catch((error) => {
        onModalOpen(error.response.data.message);
      });
  };

  /**
   * delete todo
   * @param {number} id todo id
   */
  const onDeleteTodo = async (id) => {
    await deleteTodo(id)
      .then(() => {
        onGetTodos();
      })
      .catch((error) => {
        onModalOpen(error.response.data.message);
      });
  };

  /**
   * update todo
   * @param {number} id todo id
   * @param {string} todo todo text
   * @param {boolean} isCompleted todo complete state
   */
  const onUpdateTodo = async (id, todo, isCompleted) => {
    console.log(id, todo, isCompleted);
    await updateTodo(id, todo, isCompleted)
      .then(() => {
        setIsEditTodoId(undefined);
        onGetTodos();
      })
      .catch((error) => {
        onModalOpen(error.response.data.message);
      });
  };

  /**
   * edit todo
   * @param {number} id todo id
   * @param {string} todo todo text
   */
  const onChangeEditStatus = (id, todo) => {
    setIsEditTodoId(id);
    setTodoInputValue({ ...todoInputValue, update: todo });
  };

  //logout
  const logout = () => {
    if (!localStorage.getItem('token')) return;
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  return (
    <Root>
      <div className="todo-input-wraper">
        <Input
          name="todo"
          type="text"
          width="450px"
          value={todoInputValue.post}
          onChange={(e) =>
            setTodoInputValue({ ...todoInputValue, post: e.target.value })
          }
          onKeyPress={(e) =>
            e.key === 'Enter' && onCreateTodo(todoInputValue.post)
          }
          placeholder="항목을 추가하세요"
        />
        <Button
          onClick={() => onCreateTodo(todoInputValue.post)}
          width="45px"
          height="45px"
          margin="0 0 0 10px"
          background="none"
          color="var(--primary-400)"
          text="추가"
        />
      </div>
      <ul className="todo-list">
        {todos?.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              isEditing={isEditTodoId === todo.id}
              editValue={todoInputValue.update}
              onChangeEditStatus={() => onChangeEditStatus(todo.id, todo.todo)}
              onChangeEditValue={(e) =>
                setTodoInputValue({ ...todoInputValue, update: e.target.value })
              }
              onUpdateTodo={onUpdateTodo}
              onDeleteTodo={() => onDeleteTodo(todo.id)}
            />
          );
        })}
      </ul>
      <div className="logout">
        <Button
          onClick={() => logout()}
          width="100px"
          height="45px"
          margin="0 0 0 10px"
          background="none"
          color="var(--gray6)"
          text="로그아웃"
        />
      </div>
      {isModalOpen.open && (
        <Modal
          text={isModalOpen.message}
          close="확인"
          onClose={() => setIsModalOpen({ ...isModalOpen, open: false })}
        />
      )}
    </Root>
  );
}

const Root = styled.div`
  width: 560px;
  margin: 0 auto;
  & .todo-input-wraper {
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
`;
