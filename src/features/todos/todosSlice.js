import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 998,
      task: 'Convert to TypeScript',
      complete: true
    },
    {
      id: 999,
      task: 'Read Twitter',
      complete: false
    }
  ],
  reducers: {
    addTodo: (state, action) => {
      nextTodoId += 1;
      state.push({
        id: nextTodoId,
        task: action.payload,
        complete: false
      });
    },

    deleteTodo(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
    completeTodo(state, action) {
      const commpleteTodo = state.find((t) => t.id === action.payload);
      commpleteTodo.complete = !commpleteTodo.complete;
      return state;
    }
  }
});

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
