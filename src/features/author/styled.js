import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
    background-color: #008080; /* Teal kolor */
    padding: 10px;
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Cień */
`;

export const StyledNavList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const StyledNavItem = styled.li`
    padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #006666; /* Ciemniejszy teal */
    }

    &.active {
        background-color: #004c4c; /* Najciemniejszy teal */
        font-weight: bold;
    }
`;
