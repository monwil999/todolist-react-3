import React from 'react';
import { useState, useRef } from 'react';
import { FormStyled, Input, Button } from "./styled.js"; 

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();
        
        if (trimmedNewTaskContent.length === 0) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
        inputRef.current.focus(); 
    };

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <Input 
                ref={inputRef} 
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button type="submit">Dodaj zadanie</Button>
        </FormStyled>
    );
};

export default Form;
