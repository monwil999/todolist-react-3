import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;

export const Button = styled.button`
    @media (max-width: 767px) {
        flex-basis: 100%;
    }

    color: teal;
    border: none;
    background-color: white;
    font-size: 18px;
    padding: 20px;
    margin: 10px; /* Zmiana marginesu dla lepszego wyglądu */
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 90%); /* Przyklad efektu hover */
    }
`;
