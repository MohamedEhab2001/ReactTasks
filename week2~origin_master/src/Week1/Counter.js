import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>Counter</h2>
      
      <p className="fs-4"> Count: <strong>{count}</strong></p>

      <button onClick={increment} className="btn btn-success d-inline-block me-2">
        Increment
      </button>

      <button onClick={decrement} className="btn btn-danger d-inline-block me-2">
        Decrement
      </button>

      <button onClick={reset} className="btn btn-warning d-inline-block">
        Reset
      </button>
    </div>
  );
};

export default Counter;