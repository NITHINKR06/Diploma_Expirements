//useState

import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <center>
        <h1 style={{ backgroundColor: color, color: "white" }}>USE EFFECT</h1>
        <div style={{ marginTop: "250px" }}>
          <div
            style={{ height: "100px", width: "100px", backgroundColor: color }}
          ></div>
          <h2>
            Your fav color : <span style={{ color: color }}>{color}</span>
          </h2>
          <button onClick={() => setColor("blue")}>Blue</button>
          <button onClick={() => setColor("orange")}>Orange</button>
          <button onClick={() => setColor("black")}>Black</button>
          <button onClick={() => setColor("green")}>Green</button>
        </div>
      </center>
    </>
  );
}

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
