import { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        // Logowanie wartości pola tekstowego przed użyciem trim()
        console.log("Oryginalna wartość zadania:", newTaskContent);
        
        // Usunięcie białych znaków
        const trimmedNewTaskContent = newTaskContent.trim();
        
        // Logowanie wartości po użyciu trim()
        console.log("Wartość zadania po trim():", trimmedNewTaskContent);

        // Sprawdzenie, czy zadanie jest puste po trim()
        if (trimmedNewTaskContent.length === 0) {
            console.log("Puste zadanie, nie dodano.");
            return; // Przerwij funkcję, jeśli zadanie jest puste
        }

        // Dodanie nowego zadania i czyszczenie pola tekstowego
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

