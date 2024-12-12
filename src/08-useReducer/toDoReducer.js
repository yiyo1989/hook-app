export const toDoReducer = (initialState, action = {}) => {
  switch (action.type) {
    case "add":
      throw new Error("Error guardando");

    default:
      return initialState;
  }
};
