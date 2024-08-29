import { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const trimmedNewTaskContent = newTaskContent.trim();
        
        console.log("Oryginalna wartość zadania:", newTaskContent);
        console.log("Wartość zadania po trim():", trimmedNewTaskContent);

        if (!trimmedNewTaskContent) {
            console.log("Puste zadanie, nie dodano.");
            return;
        }

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
        </form>
    );
};

export default Form;
