import "./App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import {
  Step,
  Stepper,
  StepButton,
  Container,
  Button,
  Divider,
} from "@mui/material";
import Appbar from "./components/Appbar";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useTheme } from "@mui/material/styles";

import Introduction from "./components/panels/Introduction.js";
import DigitalRoots from "./components/panels/DigitalRoots";
import ModularArithmetic from "./components/panels/ModularArithmetic";
import PlaceValueNotation from "./components/panels/PlaceValueNotation";
import Magic9 from "./components/panels/Magic9";

function App() {
  const theme = useTheme();
  const [currentStep, updateStep] = useState(0);

  const steps = [
    ["Introduction", <Introduction />],
    ["Digital Roots", <DigitalRoots />],
    ["Modular Arithmetic", <ModularArithmetic />],
    ["Place Value Notation", <PlaceValueNotation />],
    ["Magic9", <Magic9 />],
  ];
  return (
    <Container>
      <Appbar />
      {steps[currentStep][1]}
      <Button
        onClick={() =>
          updateStep((prevStep) => (prevStep - 1 + steps.length) % steps.length)
        }
      >
        Back
      </Button>
      <Button
        onClick={() => updateStep((prevStep) => (prevStep + 1) % steps.length)}
      >
        Next
      </Button>
      <Box
        sx={{
          p: 5,
          borderRadius: 2,
          boxShadow: theme.shadows[1],
          bgcolor: theme.palette.grey[100],
        }}
      >
        <Stepper nonLinear alternativeLabel activeStep={currentStep}>
          {steps.map(([label], i) => {
            return (
              <Step key={label}>
                <StepButton onClick={() => updateStep(i)}>{label}</StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Container>
  );
}

export default App;
