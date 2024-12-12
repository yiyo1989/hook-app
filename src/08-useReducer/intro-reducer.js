const data = [
  {
    id: 1,
    description: "Tomar la gema del infinito",
    done: false,
  },
];

//ToDos lista de tareas por hacer el infles to Do
const toDosReduce = (state = data, action = {}) => {
  switch (action.type) {
    case "add":
      return [...data, action.payload];
    default:
      break;
  }

  return state;
};

const newData = {
  id: 1,
  description: "Tomar la gema del poder",
  done: false,
};

const addToDos = {
  type: "add",
  payload: newData,
};

let toDos = toDosReduce(data, addToDos);

console.log(toDos);
