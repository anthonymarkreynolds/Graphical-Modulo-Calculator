import { Typography, Box } from "@mui/material";
import PanelHeader from "./PanelHeader";

const Indroduction = () => {
  return (
    <Box sx={{}}>
      <PanelHeader
        title="Introduction"
        subtitle1="Finding Digital Roots - A Visual Exploration"
        subtitle2="Created by: Anthony Mark Reynolds"
      />
      <Typography m={2}>
        Welcome, this is a simple interactive site that walks through how
        digital roots can be calculated
      </Typography>
    </Box>
  );
};

export default Indroduction;
