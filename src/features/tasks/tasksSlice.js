import { createSlice } from '@reduxjs/toolkit';
import { getTasksInLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksInLocalStorage() || [],
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: (state, { payload: task }) => {
      state.tasks = [...state.tasks, task];
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setAllDone: (state) => {
      state.tasks.forEach((task) => {
        task.done = true;
      });
    },
    fetchExampleTasks: () => {},
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const selectLoading = (state) => state.tasks.loading;
export const selectAreTaskDone = (state) => {
  const tasks = state.tasks.tasks;
  return Array.isArray(tasks) && tasks.every((task) => task.done);
};
export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
     return tasks;
  }

 return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase()));
  }
export default tasksSlice.reducer;

