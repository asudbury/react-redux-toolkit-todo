import React from 'react';
import { arrayOf, shape, number, string, bool, func } from 'prop-types';
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
  const { todosList, handleCompleteTodo, handleDeleteTodo } = props;

  return (
    <List>
      {todosList.map((todo) => (
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
  todosList: arrayOf(
    shape({
      id: number.isRequired,
      task: string.isRequired,
      complete: bool.isRequired
    })
  ),
  handleCompleteTodo: func.isRequired,
  handleDeleteTodo: func.isRequired
};

TodoList.defaultProps = {
  todosList: []
};

export default TodoList;
