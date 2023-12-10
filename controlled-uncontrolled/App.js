// Controller Comp
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    document.getElementById("color").style.backgroundColor = name;
    alert(`Name: ${name}`);
  }

  return (
    <div>
      <center>
        <div style={{ margin: "200px" }}>
          <h1 style={{ backgroundColor: "transparent" ,width:'50%'}} id="color">
            Controlled Component
          </h1>
          <h3>UseState</h3>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" style={{background:'black' ,color:'white' ,borderRadius:'10%', marginLeft:'10px',width:'100px',height:'25px'}}>Submit</button>
          </form>
        </div>
      </center>
    </div>
  );
}


<!--      111111      -->
 <!--      1111      -->
  <!--      11     -->


 
// Uncontroller Comp
import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const color = inputRef.current.value;
    document.getElementById("color").style.backgroundColor = color;
    alert(`Color: ${color}`);
  }

  return (
    <div>
      <center>
        <div style={{ margin: "200px" }}>
          <h1 style={{ backgroundColor: "transparent", width:'50%'}} id="color">
            Uncontrolled Component
          </h1>
          <h3>UseRef</h3>
          <form onSubmit={handleSubmit}>
            <label>Enter Fav Color :</label>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </center>
    </div>
  );
}

export default App;
