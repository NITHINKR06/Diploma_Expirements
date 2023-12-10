
//UseContext
import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </div>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <div style={{ backgroundColor: "#e0e0e0", padding: "20px" }}>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div style={{ backgroundColor: "#d0d0d0", padding: "20px" }}>
      <h1>Component 3</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div style={{ backgroundColor: "#c0c0c0", padding: "20px" }}>
      <h1>Component 4</h1>
      <Component5 />
    </div>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <div style={{ backgroundColor: "#b0b0b0", padding: "20px" }}>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}
