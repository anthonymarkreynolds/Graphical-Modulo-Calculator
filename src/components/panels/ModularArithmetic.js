import Polygon from "../Polygon";
import { Box, Slider, Typography, Divider } from "@mui/material";
import { useState } from "react";
import PanelHeader from "./PanelHeader";

const ModularArithmetic = () => {
  const [sides, updateSides] = useState(3);
  return (
    <>
      <PanelHeader title="Modular Arithmetic" />
      <Divider />
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
