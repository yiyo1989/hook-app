import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    const handleIncrementBy2 = () => increment(2);
    const handleDecrementBy2 = () => decrement(2);

    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleIncrementBy2}>
                +1
            </button>
            <button className="btn btn-primary" onClick={reset}>
                Reset
            </button>
            <button className="btn btn-primary" onClick={handleDecrementBy2}>
                -1
            </button>
        </>
    );
};
