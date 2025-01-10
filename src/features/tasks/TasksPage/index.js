import Form from "./Form";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import TaskList from './TaskList'; // Upewnij się, że TaskList jest poprawnie zaimportowany
import DownloadExampleTasksButton from "./DownloadExampleTasksButton";
import Search from "././Search";

function TasksPage() {
  
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj zadanie"
        extraHeaderContent={<DownloadExampleTasksButton />}
        body={<Form />}
      />
        <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />} // TaskList w body
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage; // Poprawiona nazwa eksportu