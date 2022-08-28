import { Typography, Box, Container } from "@mui/material";
import PanelHeader from "./PanelHeader";

const Indroduction = () => {
  return (
    <>
      <PanelHeader
        title="Introduction"
        subtitle1="Finding Digital Roots - A Visual Exploration"
        subtitle2="Created by: Anthony Mark Reynolds"
      />
      <Container sx={{ p: 3 }}>
        <Typography variant="h2" sx={{ mt: 5, fontSize: 36 }}>
          Welcome
        </Typography>
        <Typography sx={{ my: 2 }}>
          This is a simple interactive site that walks through how digital roots
          can be calculated
        </Typography>
      </Container>
    </>
  );
};

export default Indroduction;
