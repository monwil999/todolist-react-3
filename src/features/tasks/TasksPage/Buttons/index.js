import React from "react";
import { Wrapper, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectAreTaskDone,
  selectHideDone,
} from "../../tasksSlice.js";

const ButtonComponent = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  const areAllTasksDone = useSelector(selectAreTaskDone);

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
