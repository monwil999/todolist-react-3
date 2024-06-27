import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="section__button--header">
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
        onClick={setAllDone}
          className="section__button--header"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;