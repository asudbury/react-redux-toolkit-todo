import { logger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';

const store = configureStore({
  reducer: todosReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
