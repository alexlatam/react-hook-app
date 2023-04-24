import { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const increment = (counter) => {
    setState({
      ...state,
      [counter]: state[counter] + 1
    });
  };

  const decrement = (counter) => {
    setState({
      ...state,
      [counter]: state[counter] - 1
    });
  };

  return (
    <>
      <h1>First Counter: {state.counter1} </h1>
      <h1>Second Counter: {state.counter2} </h1>
      <h1>Third Counter: {state.counter3} </h1>

      <hr />

      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-12">First Counter</div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                onClick={ () => increment("counter1") }
              >
                Increment
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => decrement("counter1") }
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12">Second Counter</div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                onClick={() => increment("counter2") }
              >
                Increment
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => decrement("counter2") }
              >
                Decrement
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <div className="col-12">Third Counter</div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                onClick={() => increment("counter3") }
              >
                Increment
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => decrement("counter3") }
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
