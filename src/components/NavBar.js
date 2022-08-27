import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Digital Roots
            </Typography>
            <Button color="inherit">Source Code</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
