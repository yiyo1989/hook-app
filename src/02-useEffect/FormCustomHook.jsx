import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
  const {
    formState: { userName, password, email },
    onInputChange,
    onResetForm,
  } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="userName"
        value={userName}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        name="password"
        placeholder="Contraseña"
        value={password}
        onInput={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onInput={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
