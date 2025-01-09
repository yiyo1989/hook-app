import { useEffect, useReducer } from 'react';
import { ToDoList } from './ToDoList';
import { toDoReducer } from './toDoReducer';
import { ToDoAdd } from './ToDoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recoletar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recoletar la piedra del tiempo',
        done: true,
    },
];

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [];
};

export const ToDoApp = () => {
    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos]);

    const onHandleToDoNew = (toDo) => {
        dispatch({
            type: 'add',
            payload: toDo,
        });
    };

    const onHandleToDoDone = (toDo) => {
        dispatch({
            type: 'done',
            payload: toDo,
        });
    };

    return (
        <>
            <h1>
                Todo App: {toDos.length},{' '}
                <small>
                    pendientes:{' '}
                    {toDos.filter((item) => item.done === false).length}
                </small>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ToDoList toDos={toDos} onSubmitDone={onHandleToDoDone} />
                </div>
                <div className="col-5">
                    <ToDoAdd onSubmit={onHandleToDoNew} />
                </div>
            </div>
        </>
    );
};
