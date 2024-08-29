import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const trimmedNewTaskContent = newTaskContent.trim();
        
        if (!trimmedNewTaskContent) {
            setErrorMessage("Nie można dodać pustego zadania.");
            return;
        }

        setErrorMessage(""); // Usuwanie błędu, jeśli istnieje poprawne zadanie
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
            {errorMessage && <p className="form__error">{errorMessage}</p>}
        </form>
    );
};

export default Form;
