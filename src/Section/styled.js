import styled, { css } from "styled-components";

export const Title = styled.h1`
    margin: 0;
    font-size: 20px;
`;

export const StyledSection = styled.section`
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 5px #ddd;

    ${({ body }) => body && css`
        padding: 20px;
    `}

    ${({ header }) => header && css`
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 15px;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #eee;
        grid-template-columns: 1fr;
    `}
`;
