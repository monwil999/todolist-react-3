import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import TaskList from "./TaskList";
import { selectTasks } from "./tasksSlice";


function Tasks() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj zadanie" body={<Form  />} />
      <Section
        title="Lista zadań"
        body={
          <TaskList/>
        }
        extraHeaderContent={
          <Buttons/>
        }
      />
    </Container>
  );
}

export default Tasks;
