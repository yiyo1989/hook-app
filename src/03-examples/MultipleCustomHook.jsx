import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHook = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
