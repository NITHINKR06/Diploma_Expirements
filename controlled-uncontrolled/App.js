
import React, { useRef } from "react";
import "./App.css";
 
function App() {
    const inputRef = useRef(null);
 
    function handleSubmit() {
        alert(`Name: ${inputRef.current.value}`);
    }
 
    return (
        <div className="App">
            <h1 className="geeks">GeeksForGeeks</h1>
            <h3>Uncontrolled Component</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    ref={inputRef}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default App;


import { useState } from "react";
import "./App.css";
 
function App() {
    const [name, setName] = useState("");
 
    function handleSubmit() {
        alert(`Name: ${name}`);
    }
 
    return (
        <div className="App">
            <h1 className="geeks">GeeksForGeeks</h1>
            <h3>Controlled Component</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    name="name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default App;


