import { Button, ButtonGroup, Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CountUp from "react-countup";

const Polygon = ({ sides }) => {
  const [polygon, togglePolygon] = useState(false);
  const [animate, toggleAnimate] = useState(false);
  const [counter, updateCounter] = useState(10);
  const [speed, updateSpeed] = useState(5);

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
      <Typography variant="h5">
        {counter} mod {sides}
      </Typography>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {sides > 2 && polygon ? (
          <polyline
            className={`path ${animate && "animate"}`}
            stroke="tomato"
            fill="blanchedalmond"
            points={points}
            pathLength="1"
            style={{
              animationName: "dash",
              animationDuration: `${speed / (counter / sides)}s`,
              animationIterationCount: counter / sides,
              animationFillMode: "forwards",
              animationTimingFunction: "linear",
            }}
          />
        ) : (
          <circle
            className={`path circle`}
            stroke="tomato"
            fill="blanchedalmond"
            cx="50"
            cy="50"
            r="35"
            pathLength="1"
            style={{
              animationName: animate ? "dash" : "",
              animationDuration: `${speed / (counter / sides)}s`,
              animationIterationCount: counter / sides,
              animationFillMode: "forwards",
              animationTimingFunction: "linear",
            }}
          />
        )}
        {coords.map(([x, y], i) => (
          <text
            key={i}
            x={50 - x * 40}
            y={50 + y * 40}
            className={`small ${i > 9 ? "ch2" : "ch1"}`}
            fontSize={`${0.4 / sides + 0.2}em`} // this was tiresome to fine tune lol
          >
            {i}
          </text>
        ))}
        <CountUp
          start={0}
          end={counter}
          duration={speed}
          delay={speed / sides / 2 - 0.5}
          useEasing={false}
        >
          {({ countUpRef, start, reset }) => {
            animate ? start() : reset();
            return (
              <text
                id="svg-counter"
                ref={countUpRef}
                fill="grey"
                x="40%"
                y="56%"
              ></text>
            );
          }}
        </CountUp>
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
      <ButtonGroup>
        <Button
          onClick={() => {
            toggleAnimate(true);
          }}
        >
          Calculate
        </Button>
        <Button
          onClick={() => {
            toggleAnimate(false);
          }}
        >
          reset
        </Button>
      </ButtonGroup>

      <TextField
        id="input-number"
        label="Enter a Number"
        type="number"
        sx={{ m: 2 }}
        onChange={(e) => updateCounter(e.target.value)}
      />
      {counter}
      <p>
        {polygon && sides > 2 ? "Sides" : "Segments"} (modulus): {sides}
      </p>
    </>
  );
};

export default Polygon;
