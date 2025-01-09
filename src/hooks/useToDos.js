import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/toDoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("toDos")) || [];
};

export const useToDos = () => {
  const [toDos, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const HandleToDoNew = (toDo) => {
    dispatch({
      type: "add",
      payload: toDo,
    });
  };

  const HandleToDoDone = (toDo) => {
    dispatch({
      type: "done",
      payload: toDo,
    });
  };

  const HandleToDoRemove = (toDo) => {
    dispatch({
      type: "remove",
      payload: toDo,
    });
  };

  return {
    toDos,
    pendingToDos: toDos.filter((item) => item.done === false).length,
    HandleToDoDone,
    HandleToDoRemove,
    HandleToDoNew,
  };
};
