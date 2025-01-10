import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import tasksReducer from './features/tasks/tasksSlice';
import { watchFetchExampleTasks } from './features/tasks/tasksSaga';

// Tworzymy middleware Redux Saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;
