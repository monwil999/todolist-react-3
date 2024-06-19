import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
   {tasks.length > 0 && (
     <>
      <button className="section__button--header">
        {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>
      <button
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
