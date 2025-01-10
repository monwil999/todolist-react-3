import React, { useState } from "react";
import { Wrapper, Button } from "./styled.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice.js";

const DownloadTasksButton = () => {
  const dispatch = useDispatch();
  const globalLoading = useSelector(selectLoading);
  const [localLoading, setLocalLoading] = useState(false);

  const handleFetchTasks = () => {
    setLocalLoading(true);
    dispatch(fetchExampleTasks());
    setTimeout(() => setLocalLoading(false), 1000);
  };

  const isLoading = globalLoading || localLoading;

  return (
    <Wrapper>
      <Button onClick={handleFetchTasks} disabled={isLoading}>
        {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
    </Wrapper>
  );
};

export default DownloadTasksButton;
