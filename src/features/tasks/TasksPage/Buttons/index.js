import React from "react";
import { Wrapper, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectAreTaskDone, selectHideDone } from "../../tasksSlice.js";

const ButtonComponent = () => {
  const tasks = useSelector(selectTasks);  // Pobieramy zadania z Redux
  const hideDone = useSelector(selectHideDone);  // Pobieramy wartość hideDone z Redux
  const dispatch = useDispatch();
  const areAllTasksDone = useSelector(selectAreTaskDone);  // Sprawdzamy, czy wszystkie zadania są ukończone
  
  return (
    <Wrapper>
      {tasks?.length > 0 && (
         <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={areAllTasksDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default ButtonComponent;
