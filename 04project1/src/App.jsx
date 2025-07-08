import { useState } from "react";
import "./App.css"; 

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <div className="button-container">
        <div className="button-group">
          <button
            onClick={() => setColor("red")}
            className="color-button"
            style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="color-button"
            style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="color-button"
            style={{ backgroundColor: "blue" }}>
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
