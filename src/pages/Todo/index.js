import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTodo, getTodos, updateTodo, deleteTodo } from '../../api/todo';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Modal from '../../components/common/Modal';
import TodoItem from '../../components/todo/TodoItem';

import { Root } from './style';

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
      <div className="inner">
        <div className="todo-input-wrapper">
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
            placeholder="????????? ???????????????"
          />
          <Button
            onClick={() => onCreateTodo(todoInputValue.post)}
            width="45px"
            height="45px"
            margin="0 0 0 10px"
            background=""
            color="var(--primary-400)"
            text="??????"
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
                onCancelEdit={() => setIsEditTodoId()}
                onChangeEditStatus={() =>
                  onChangeEditStatus(todo.id, todo.todo)
                }
                onChangeEditValue={(e) =>
                  setTodoInputValue({
                    ...todoInputValue,
                    update: e.target.value,
                  })
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
            text="????????????"
          />
        </div>
      </div>
      {isModalOpen.open && (
        <Modal
          text={isModalOpen.message}
          close="??????"
          onClose={() => setIsModalOpen({ ...isModalOpen, open: false })}
        />
      )}
    </Root>
  );
}
