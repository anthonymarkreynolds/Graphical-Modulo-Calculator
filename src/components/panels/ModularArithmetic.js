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
        <Polygon />
      </Container>
    </>
  );
};

export default ModularArithmetic;
