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

import React, { useState, useEffect } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  // useEffect to log the count whenever it changes
  useEffect(() => {
    console.log("Count has been updated:", count);
  }, [count]);

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <center>
        <h1>Count: {count}</h1>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </center>
    </>
  );
}

export default CounterApp;
