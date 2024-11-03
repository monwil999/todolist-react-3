import ButtonStyled from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonStyled>
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
  </ButtonStyled>
);

export default Buttons;
