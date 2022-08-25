import "./App.css";
import { useState } from "react";

const Polygon = ({ sides }) => {
  const angle = 6.28 / sides;
  const coords = Array.from({ length: sides }, (_, i) => [
    Math.sin(angle * i),
    Math.cos(angle * i),
  ]);
  const points = coords
    .map(([x, y]) => `${50 - x * 35},${50 + y * 35}`)
    .join(" ");
  return (
    <>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points={points} />
        {coords.map(([x, y], i) => (
          <text
            x={50 - x * 40}
            y={50 + y * 40}
            class={`small ${i > 9 ? "ch2" : "ch1"}`}
            fontSize={`${0.4 / sides + 0.1}em`} // this was tiresome to fine tune lol
          >
            {i}
          </text>
        ))}
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
