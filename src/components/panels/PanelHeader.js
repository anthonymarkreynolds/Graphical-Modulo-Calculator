import { Typography, Divider, Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PanelHeader = ({ title, subtitle1, subtitle2 }) => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ bgcolor: theme.palette.grey[50], p: 5, textAlign: "center" }}>
        <Container>
          <Typography variant="h1" sx={{ mb: 2, fontSize: 48 }}>
            {title}
          </Typography>

          {subtitle1 && (
            <Typography variant="subtitle1">{subtitle1}</Typography>
          )}
          <Divider />
          {subtitle2 && (
            <Typography variant="subtitle2">{subtitle2}</Typography>
          )}
        </Container>
      </Box>
      <Divider />
    </>
  );
};

export default PanelHeader;
