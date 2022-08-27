import PanelStepper from "./PanelStepper";
import NavBar from "./NavBar";

import Introduction from "./panels/Introduction";
import DigitalRoots from "./panels/DigitalRoots";
import ModularArithmetic from "./panels/ModularArithmetic";
import PlaceValueNotation from "./panels/PlaceValueNotation";
import Magic9 from "./panels/Magic9";

import {
  Box,
  Container,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GitHub } from "@mui/icons-material";

const Layout = ({ children }) => {
  const theme = useTheme();
  const panels = [
    ["Introduction", <Introduction />],
    ["Digital Roots", <DigitalRoots />],
    ["Modular Arithmetic", <ModularArithmetic />],
    ["Place Value Notation", <PlaceValueNotation />],
    ["Magic 9", <Magic9 />],
  ];
  return (
    <div>
      <NavBar />
      {children}
      <PanelStepper panels={panels} />
      <Box sx={{ mt: 5, bgcolor: theme.palette.grey[100], height: "400px" }}>
        <Container sx={{ p: 3 }}>
          <ButtonGroup>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
          </ButtonGroup>
          <Typography variant="subtitle2" mt={2}>
            © Copyright 2022 Anthony Mark Reynolds
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Layout;
