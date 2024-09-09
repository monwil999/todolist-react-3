import { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();


        console.log("Oryginalna wartość zadania:", newTaskContent);
        
        
        const trimmedNewTaskContent = newTaskContent.trim();
        
       
     trimmedNewTaskContent);

     
        if (trimmedNewTaskContent.length === 0) {
            return;
        }
        addNewTask(trimmedNewTaskContent);
        console.log("Dodano zadanie:", trimmedNewTaskContent);
        
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
            <button className="form__button" type="submit">Dodaj zadanie</button>
        </form>
    );
};

export default Form;

