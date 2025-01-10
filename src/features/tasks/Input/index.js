import styled from "styled-components";

export default styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px; /* Dodaj zaokrąglenie rogów */
    &:focus {
        outline: none; /* Usuwanie domyślnej ramki po kliknięciu */
        border-color: hsl(180, 100%, 35%); /* Zmiana koloru ramki */
    }
`;