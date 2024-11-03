import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;

export const Button = styled.button`
    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    color: teal;
    border: none;
    background-color: white;
    font-size: 18px;
    padding: 20px;
    transition: 1s;
`;

