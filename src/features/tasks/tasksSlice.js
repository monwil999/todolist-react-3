import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload); 
            if (task) {
                task.done = !task.done; 
            }
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        setAllDone: (state) => {
            state.tasks.forEach(task => {
                task.done = true; 
            });
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;
