import { Typography, Box, Divider, Paper } from "@mui/material";

const Indroduction = () => {
  return (
    <Box sx={{}}>
      <Typography variant="h1" mt={2}>
        Introduction
      </Typography>
      <Typography variant="subtitle1">
        Finding Digital Roots - A Visual Exploration
      </Typography>
      <Divider />
      <Typography m={2}>
        This is a simple interactive site that walks through how digital roots
        can be calculated
      </Typography>
    </Box>
  );
};

export default Indroduction;
