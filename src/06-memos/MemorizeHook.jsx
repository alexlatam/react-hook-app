import { useMemo, useState } from "react";
import { useCounter } from "../Hooks";

const heavyStuff = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Ahi vamos...");
  }
  return `${iterations} iterations done`;
};

export const MemorizeHook = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <p>{memorizedValue}</p>

      <button className="btn btn-primary" onClick={() => increment()}>
        Increment
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
