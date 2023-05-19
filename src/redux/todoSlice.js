import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const todoSlice = createSlice({
  // Ім'я слайсу
  name: 'todos',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
  },
  // Об'єкт редюсерів
  reducers: {
    addTodo(state, action) {
      //   state.items.push(action.payload);
      state.items = [...state.items, action.payload];
    },

    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

// Генератори екшенів
export const { addTodo, deleteTodo } = todoSlice.actions;
// Редюсер слайсу
export const todoReducer = todoSlice.reducer;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedTodoReducer = persistReducer(
  persistConfig,
  todoSlice.reducer
);
