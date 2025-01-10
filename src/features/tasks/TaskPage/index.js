import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  if (!task) {
    return (
      <Container>
        <Header title="Szczegóły zadania" />
        <Section
          title="Nie znaleziono zadania :("
          body="Zadanie, którego szukasz nie istnieje lub zostało usunięte."
        />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task.content}
        body={
          <>
            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
