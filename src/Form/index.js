import { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        // Usunięcie białych znaków z początku i końca wartości wprowadzonej przez użytkownika
        const trimmedNewTaskContent = newTaskContent.trim();
        
        // Logowanie do konsoli dla debugowania
        console.log("Oryginalna wartość zadania:", newTaskContent);
        console.log("Wartość zadania po trim():", trimmedNewTaskContent);

        // Sprawdzenie, czy zadanie po trim() nie jest puste
        if (trimmedNewTaskContent.length === 0) {
            console.log("Puste zadanie, nie dodano.");
            return; // Zakończenie działania funkcji, jeśli zadanie jest puste
        }

        // Dodanie zadania, jeśli nie jest puste
        addNewTask(trimmedNewTaskContent);
        
        // Resetowanie pola tekstowego po dodaniu zadania
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
