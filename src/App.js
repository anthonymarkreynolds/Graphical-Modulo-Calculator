import "./App.css";
import { useState } from "react";

const Polygon = ({ sides }) => {
  const angle = 6.28 / sides;
  const points = Array.from(
    { length: sides },
    (_, i) =>
      `${50 - Math.sin(angle * i) * 50},${50 + Math.cos(angle * i) * 50}`
  ).join(" ");
  return (
    <>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points={points} />
      </svg>
      <p>External angle(radians) ≈ {angle}</p>
      <p>Sides: {sides}</p>
    </>
  );
};

function App() {
  const [sides, updateSides] = useState(3);
  return (
    <div className="App">
      <header className="App-header">
        <Polygon sides={sides} />
        <input
          type="range"
          name="slider"
          defaultValue="3"
          min="3"
          max="30"
          onChange={(e) => updateSides(e.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
