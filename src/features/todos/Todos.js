import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { addTodo, deleteTodo, completeTodo } from './todosSlice';

function Todos() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const todosList = useSelector((state) => state);

  const handleAddTodo = () => {
    if (input.length > 0) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <Header />
      <AddTodo
        input={input}
        setInput={setInput}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todosList={todosList}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default Todos;
