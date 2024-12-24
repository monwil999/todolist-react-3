import styled from "styled-components";

export const Sectionstyle = styled.section`
  background-color: white;
  margin: 15px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin: 15px;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h2`
  font-size: 30px;
  padding: 20px;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;