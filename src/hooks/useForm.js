import { useState } from "react";

export const useForm = (initForm = {}) => {
  const [formState, setFormState] = useState(initForm);

  const onInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  const onResetForm = () => {
    setFormState(initForm); // Resetea el formulario al estado inicial
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};
