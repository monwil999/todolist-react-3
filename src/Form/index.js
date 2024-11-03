import { useState } from 'react';
import { FormStyled, Input, Button } from "./styled.js"; 

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();
        
        if (trimmedNewTaskContent.length === 0) {
            // Tutaj można dodać komunikat informujący o błędzie
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <Input
                placeholder="Co jest do zrobienia?"
                value={newTaskContent} // Dodano przypisanie wartości
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button type="submit">Dodaj zadanie</Button>
        </FormStyled>
    );
};

export default Form;
