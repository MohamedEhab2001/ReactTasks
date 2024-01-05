import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div>
      <h2>Timer</h2>
      <p className="fs-4">
        Time: <strong style={{ color: 'red' }}>{seconds}</strong> seconds
      </p>
    </div>
  );
};

export default Timer;
