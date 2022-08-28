import Polygon from "../Polygon";
import { Box, Container, Slider, Typography, Divider } from "@mui/material";
import { useState } from "react";
import PanelHeader from "./PanelHeader";

const ModularArithmetic = () => {
  const [sides, updateSides] = useState(3);
  return (
    <>
      <PanelHeader title="Modular Arithmetic" />
      <Container sx={{ p: 3 }}>
        <Typography variant="h2" sx={{ mt: 5, fontSize: 36 }}>
          What is Modular Arithmetic?
        </Typography>
        <Typography sx={{ my: 3 }}>TODO: explain</Typography>
        <Polygon sides={sides} />
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Sides"
            defaultValue={3}
            getAriaValueTExt={`Sides: ${sides}`}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={16}
            onChange={(e) => updateSides(e.target.value)}
          />
        </Box>
      </Container>
    </>
  );
};

export default ModularArithmetic;
