import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice"; // Importujemy akcję
import { nanoid } from "@reduxjs/toolkit";
import { FormStyled, Input, Button } from "./styled"; // Upewnij się, że masz poprawnie zdefiniowane styled components

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();  // Zapobiegamy domyślnemu wysyłaniu formularza

        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent.length === 0) {
            return; // Jeśli treść zadania jest pusta, nic nie robimy
        }

        // Logowanie do konsoli, żeby sprawdzić, co wysyłamy
        console.log("Dodawane zadanie:", {
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(), // Generujemy unikalne ID
        });

        // Wysyłamy akcję do Redux
        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        // Czyszczenie formularza
        setNewTaskContent("");
        inputRef.current.focus(); // Fokus na input po dodaniu zadania
    };

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)} // Aktualizacja stanu
            />
            <Button type="submit">Dodaj zadanie</Button>
        </FormStyled>
    );
};

export default Form;
