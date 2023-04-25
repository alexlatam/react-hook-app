import { useState } from "react";
import { useCounter } from "../Hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
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
