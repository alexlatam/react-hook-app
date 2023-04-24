import { useCounter } from "../Hooks/useCounter";

export const CounterWihtCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(10);

  return (
    <>
        <h1> CounterWihtCustomHook {counter} </h1>

        <hr />

        <button className="btn btn-info" onClick={ () => increment(2) }>Increment</button>
        <button className="btn btn-outline-info" onClick={ reset }>Reset</button>
        <button className="btn btn-outline-info" onClick={ () => decrement(3) }>Decrement</button>
    </>
  )
}
