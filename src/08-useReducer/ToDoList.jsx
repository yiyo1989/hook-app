export const ToDoList = ({ toDos = [], onSubmitDone, onSubmitRemove }) => {
  const onClickDone = (toDo) => {
    onSubmitDone(toDo);
  };

  const onClickRemove = (toDo) => {
    onSubmitRemove(toDo);
  };

  return (
    <>
      <ul className="list-group">
        {toDos.map((toDo) => (
          <li
            key={toDo.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className="align-self-center">{toDo.description}</span>
            <button
              onClick={() => onClickDone(toDo)}
              className={`btn ${toDo.done ? "btn-danger" : "btn-success"}`}
            ></button>
            <button
              onClick={() => onClickRemove(toDo)}
              className="btn btn-primary"
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
