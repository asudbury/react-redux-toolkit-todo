import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton
} from '@material-ui/core';

import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

function TodoList(props) {
  const { todos, handleCompleteTodo, handleDeleteTodo } = props;

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} button divider>
          <Checkbox
            aria-label="Complete Todo"
            disableRipple
            checked={todo.complete}
            onChange={() => handleCompleteTodo(todo.id)}
          />
          <ListItemText primary={todo.task} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete Todo"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <DeleteOutlined color="primary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

TodoList.propTypes = {
  todos: PropTypes.shape([]).isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired
};

export default TodoList;
