const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks => {
    return localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};
export const getTasksInLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    return Array.isArray(tasks) ? tasks : [];
};


