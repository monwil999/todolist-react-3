import styled from "styled-components";

export const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px; 
`; 
export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background: hsl(180, 100%, 25%);
    color: white;
    border: none;
    transition: 1s;

    &:hover {
        background: hsl(180, 100%, 35%);
        transform: scale(1.2);
        cursor: pointer;
    }
`;
