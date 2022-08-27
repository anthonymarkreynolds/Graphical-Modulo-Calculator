import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import {
  Container,
  ButtonGroup,
  Button,
  Box,
  Stepper,
  Step,
  StepButton,
  Typography,
  Divider,
} from "@mui/material";

import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";

const PanelStepper = ({ panels }) => {
  const [currentPanel, updatePanel] = useState(0);
  const theme = useTheme();

  return (
    <Container>
      <Box my={3}>{panels[currentPanel][1]}</Box>
      <Divider />
      <ButtonGroup variant="text" sx={{ m: 3 }}>
        <Button
          disabled={!currentPanel}
          onClick={() =>
            updatePanel(
              (prevPanel) => (prevPanel - 1 + panels.length) % panels.length
            )
          }
        >
          <ArrowBackIosNew /> Back
        </Button>
        <Button
          disabled
          sx={{ color: `${theme.palette.grey[700]} !important` }}
        >
          {panels[currentPanel][0]}
        </Button>
        <Button
          disabled={currentPanel === panels.length - 1}
          onClick={() =>
            updatePanel((prevPanel) => (prevPanel + 1) % panels.length)
          }
        >
          Next <ArrowForwardIos />
        </Button>
      </ButtonGroup>
      <Box
        sx={{
          p: 5,
          pb: 3,
          borderRadius: 2,
          boxShadow: theme.shadows[1],
          bgcolor: theme.palette.grey[100],
        }}
      >
        <Stepper nonLinear alternativeLabel activeStep={currentPanel}>
          {panels.map(([label], i) => {
            return (
              <Step key={label}>
                <StepButton onClick={() => updatePanel(i)}>{label}</StepButton>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Container>
  );
};

export default PanelStepper;
