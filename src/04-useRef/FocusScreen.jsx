import { useRef } from "react";

export const FocusScreen = () => {
  const inputRefName = useRef();

  const onClick = () => {
    inputRefName.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRefName}
        className="form-control"
        type="text"
        placeholder="Ingrese nombre"
      />
      <button onClick={onClick} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
