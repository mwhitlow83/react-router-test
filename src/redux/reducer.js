
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const counterSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
})

export const { addTodos } = addTodoReducer.actions
export const reducer = addTodoReducer.reducer