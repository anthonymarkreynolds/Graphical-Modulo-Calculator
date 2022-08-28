import Polygon from "../Polygon";
import { Box, Container, Slider, Typography, Divider } from "@mui/material";
import { useState } from "react";
import PanelHeader from "./PanelHeader";

const ModularArithmetic = () => {
  const [sides, updateSides] = useState(3);
  return (
    <>
      <PanelHeader title="Modular Arithmetic" />
      <Container>
        <Polygon sides={sides} />
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Sides"
            defaultValue={3}
            getAriaValueTExt={`Sides: ${sides}`}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={3}
            max={16}
            onChange={(e) => updateSides(e.target.value)}
          />
        </Box>
      </Container>
    </>
  );
};

export default ModularArithmetic;
