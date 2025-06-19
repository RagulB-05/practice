import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { payload } = action;
      state.taskList.push(payload);
    },
    deleteTask: (state, action) => {
      const { payload } = action;
      state.taskList = state.taskList.filter((task) => task.id !== payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
