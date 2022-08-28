import { Battery0Bar } from "@mui/icons-material";
import {
  Slider,
  Button,
  ButtonGroup,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useRef } from "react";
import { useCountUp } from "react-countup";

const Polygon = () => {
  const [sides, updateSides] = useState(3);
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

  const countUpRef = useRef(null);
  const { start, reset } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: counter,
    duration: speed,
    delay: speed / counter / 2,
    useEasing: false,
    startOnMount: false,
  });

  const handleValidate = (numStr) =>
    isNaN(Number(numStr)) ? 0 : Number(numStr);

  return (
    <>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {sides > 2 && polygon ? (
          <polyline
            className={`path ${animate && "animate"}`}
            stroke="tomato"
            fill="blanchedalmond"
            points={points}
            pathLength="1"
            style={{
              animationName: animate ? "dash" : "",
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
        <text
          id="svg-counter"
          ref={countUpRef}
          fill="grey"
          y="56%"
          x="45%"
        ></text>
      </svg>
      <Box m={3}>
        <ButtonGroup>
          <Button
            onClick={() => {
              toggleAnimate(true);
              start();
            }}
          >
            Calculate
          </Button>
          <Button
            onClick={() => {
              toggleAnimate(false);
              reset();
            }}
          >
            reset
          </Button>
          <Button
            disabled={sides < 3}
            onClick={() => {
              togglePolygon(!polygon);
              toggleAnimate(false);
            }}
          >
            display as {polygon && sides > 2 ? "circle" : "polygon"}
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          id="input-number"
          label="Enter a Number"
          type="number"
          defaultValue={counter}
          sx={{ m: 2 }}
          onChange={(e) => {
            updateCounter(e.target.value);
            toggleAnimate(false);
          }}
        />
        <Typography variant="h6">mod</Typography>
        <TextField
          id="input-modulus"
          label={`${polygon && sides > 2 ? "Sides" : "Segments"} (modulus)`}
          type="number"
          defaultValue={sides}
          sx={{ m: 2 }}
          onChange={(e) => {
            updateSides(handleValidate(e.target.value));
            toggleAnimate(false);
          }}
        />
      </Box>
      <Box m={3} sx={{ maxWidth: "600px" }}>
        <Typography variant="overline" gutterBottom>
          Animation Duration: {speed} seconds
        </Typography>
        <Slider
          aria-label="Animation Speed"
          defaultValue={5}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
          onChange={(e) => {
            updateSpeed(() => handleValidate(e.target.value));
            toggleAnimate(false);
          }}
        />
      </Box>
    </>
  );
};

export default Polygon;
