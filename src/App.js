import "./App.css";
import { useState } from "react";

const Polygon = ({ sides }) => {
  const angle = 6.28 / sides;
  const coords = Array.from({ length: sides }, (_, i) => [
    Math.sin(angle * i + 3.14),
    Math.cos(angle * i + 3.14),
  ]);
  const points = [...coords, coords[0]]
    .map(([x, y]) => `${50 - x * 35},${50 + y * 35}`)
    .join(" ");
  return (
    <>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polyline
          className="path"
          stroke="blanchedalmond"
          fill="black"
          points={points}
          pathLength="1"
        />
        {coords.map(([x, y], i) => (
          <text
            key={i}
            x={50 - x * 40}
            y={50 + y * 40}
            className={`small ${i > 9 ? "ch2" : "ch1"}`}
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
