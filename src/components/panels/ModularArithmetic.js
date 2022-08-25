import Polygon from "../Polygon";
import { Box, Slider } from "@mui/material";

const ModularArithmetic = () => {
  const [sides, updateSides] = [3, (a) => a];
  return (
    <>
      <Polygon sides={sides} />
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Sides"
          defaultValue={[3, 12]}
          getAriaValueTExt={`Sides: ${sides}`}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={3}
          max={30}
          onChange={(e) => updateSides(e.target.value[0])}
        />
      </Box>
    </>
  );
};

export default ModularArithmetic;
