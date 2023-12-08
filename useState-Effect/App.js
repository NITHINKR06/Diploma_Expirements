//useState

import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
    <center>
        <h1 style={{ color: color }}>
            My App color is {color}
        </h1>
        <button type="button" onClick={() => setColor("blue")}>
            Blue
        </button>
        <button type="button" onClick={() => setColor("pink")}>
            Pink
        </button>
        <button type="button" onClick={() => setColor("orange")}>
            Orange
        </button>
        <button type="button" onClick={() => setColor("black")}>
            Black
        </button>
      </center>
    </>
  );
}

export default App;

//useEffect

import React, { useState, useEffect } from 'react';

function ClockTimer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h2>Clock Timer</h2>
      <p>Current Time: {formattedTime}</p>
    </div>
  );
}

export default ClockTimer;
