import styled, { css } from "styled-components";

const ButtonsStyled = styled.button`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    ${({ header }) => header && css`
        color: teal;
        border: none;
        background-color: white;
        font-size: 18px;
        padding: 20px;
        transition: 1s;
    `};
`;

export default ButtonsStyled;
