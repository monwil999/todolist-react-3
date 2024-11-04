import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState
    ;

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addNewTask = (content) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                content,
                done: false,
                id: prevTasks.length === 0 ? 1 : prevTasks[prevTasks.length - 1].id + 1,
            },
        ]);
    };

    const removeTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, done: !task.done };
                }
                return task;
            })
        );
    };

    const setAllDone = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => ({
                ...task,
                done: true,
            }))
        );
    };

    const toggleHideDone = (hideDone) => {
        return (hideDone) => !hideDone;
    };

    return {
        tasks,
        addNewTask,
        removeTask,
        toggleTaskDone,
        setAllDone,
        toggleHideDone,
    };
};

export default useTasks;
