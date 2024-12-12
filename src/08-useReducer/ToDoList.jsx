export const ToDoList = ({ toDos = [] }) => {
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
              className={`btn ${toDo.done ? "btn-danger" : "btn-success"}`}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};
