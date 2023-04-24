import { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

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
                onClick={() =>
                  setState({
                    ...state,
                    counter1: state.counter1 + 1
                  })
                }
              >
                Increment
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() =>
                  setState({
                    ...state,
                    counter1: state.counter1 - 1
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    counter2: state.counter2 + 1
                  })
                }
              >
                Increment
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() =>
                  setState({
                    ...state,
                    counter2: state.counter2 - 1
                  })
                }
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
                onClick={() =>
                  setState({
                    ...state,
                    counter3: state.counter3 + 1
                  })
                }
              >
                Increment
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() =>
                  setState({
                    ...state,
                    counter3: state.counter3 - 1
                  })
                }
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
