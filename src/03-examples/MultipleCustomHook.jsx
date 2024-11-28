import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const handleIncrement = () => increment(1);
  const handleDecrement = () => counter > 1 && decrement(1);

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <button className="btn btn-primary mt-2" onClick={handleDecrement}>
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={handleIncrement}>
        Siguiente
      </button>
      <hr />
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      {/* <pre> {data && JSON.stringify(data, null, 2)}</pre> */}

      <pre> {hasError && JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
