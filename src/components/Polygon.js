import { Button, Box } from "@mui/material";

const Polygon = ({ sides }) => {
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
        <polyline
          className="path"
          stroke="tomato"
          fill="blanchedalmond"
          points={points}
          pathLength="1"
        />
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
      </svg>
      <Box>
        <Button variant="outlined">Start</Button>
      </Box>
      <p>External angle(radians) ≈ {angle}</p>

      <p>Sides: {sides}</p>
    </>
  );
};

export default Polygon;
