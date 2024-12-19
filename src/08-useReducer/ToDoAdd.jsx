import { useForm } from "../hooks/useForm";

export const ToDoAdd = ({ onSubmit }) => {
  const {
    formState: { toDoDescription },
    onInputChange,
    onResetForm,
  } = useForm({
    toDoDescription: "",
  });

  const handleOnSubmit = () => {
    event.preventDefault();

    if (toDoDescription.trim().length < 2) return;

    //setCategory((categories) => [inputValue, ...categories]);
    let newData = {
      id: new Date().getTime() * 3,
      description: toDoDescription,
      done: false,
    };
    onSubmit(newData);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h4>Agregar tarea</h4>
        <input
          type="text"
          placeholder="Describa la tarea"
          className="form-control"
          name="toDoDescription"
          value={toDoDescription}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
