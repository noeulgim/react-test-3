import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { waitTwoSeconds } from "../../utils";

export const __addTodo = createAsyncThunk(
  "__addToDo",
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return thunkAPI.fulfillWithValue(payload);
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return thunkAPI.fulfillWithValue(payload);
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(__addTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
