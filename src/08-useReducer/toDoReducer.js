export const toDoReducer = (initialState, action = {}) => {
  switch (action.type) {
    case "add":
      if (!action.payload) {
        throw new Error("Error guardando: falta el payload");
      }
      return [...initialState, action.payload]; // Añadir tarea al estado actual

    default:
      return initialState;
  }
};
