export const toDoReducer = (initialState = [], action = {}) => {
    //Se valida que exista data
    if (!action.payload) {
        throw new Error('Error guardando: falta el payload');
    }

    switch (action.type) {
        case 'add':
            return [...initialState, action.payload]; // Añadir tarea al estado actual
        case 'done':
            return initialState.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        default:
            return initialState;
    }
};
