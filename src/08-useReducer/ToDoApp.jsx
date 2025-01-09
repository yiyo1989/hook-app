import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";
import { useToDos } from "../hooks";
export const ToDoApp = () => {
  const {
    toDos = [],
    pendingToDos,
    HandleToDoDone,
    HandleToDoRemove,
    HandleToDoNew,
  } = useToDos();

  return (
    <>
      <h1>
        Todo App: {toDos.length}, <small>pendientes: {pendingToDos}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ToDoList
            toDos={toDos}
            onSubmitDone={HandleToDoDone}
            onSubmitRemove={HandleToDoRemove}
          />
        </div>
        <div className="col-5">
          <ToDoAdd onSubmit={HandleToDoNew} />
        </div>
      </div>
    </>
  );
};
