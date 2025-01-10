import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: teal;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  padding: 0;
  color: teal;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background: green;
      color: white; // Kolor "✓" na biały
    `}

  ${({ remove }) =>
    remove &&
    css`
      background: red;
      &:hover {
        background: rgb(193, 89, 89);
      }
    `}
    
    ${({ done }) =>
    done &&
    css`
      background: green;
      color: white; // Kolor "✓" na biały
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;

  &:hover {
    color: darkcyan;
  }
`;
