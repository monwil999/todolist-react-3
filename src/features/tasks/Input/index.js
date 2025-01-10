import styled from "styled-components";

export default styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: hsl(180, 100%, 35%);
  }
`;
