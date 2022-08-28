import { Button, Box } from "@mui/material";
import { useState } from "react";

const Polygon = ({ sides }) => {
  const [polygon, togglePolygon] = useState(false);
  const angle = (Math.PI * 2) / sides;
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
        {sides > 2 && polygon ? (
          <polyline
            className="path"
            stroke="tomato"
            fill="blanchedalmond"
            points={points}
            pathLength="1"
          />
        ) : (
          <circle
            className="path circle"
            stroke="tomato"
            fill="blanchedalmond"
            cx="50"
            cy="50"
            r="35"
            pathLength="1"
          />
        )}
        {coords.map(([x, y], i) => (
          <text
            key={i}
            x={50 - x * 40}
            y={50 + y * 40}
            className={`small ${i > 9 ? "ch2" : "ch1"}`}
            fontSize={`${0.4 / sides + 0.25}em`} // this was tiresome to fine tune lol
          >
            {i}
          </text>
        ))}
        <text x="32%" y="55%">
          % {sides}
        </text>
      </svg>
      <Box>
        <Button
          disabled={sides < 3}
          variant="outlined"
          onClick={() => togglePolygon(!polygon)}
        >
          display as {polygon && sides > 2 ? "circle" : "polygon"}
        </Button>
      </Box>

      <p>
        {polygon && sides > 2 ? "Sides" : "Segments"} (modulus): {sides}
      </p>
    </>
  );
};

export default Polygon;
