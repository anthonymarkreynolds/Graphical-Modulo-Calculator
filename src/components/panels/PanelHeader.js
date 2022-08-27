import { Typography, Divider } from "@mui/material";

const PanelHeader = ({ title, subtitle1, subtitle2 }) => {
  return (
    <>
      <Typography variant="h1" sx={{ my: 2, fontSize: 48 }}>
        {title}
      </Typography>

      {subtitle1 && <Typography variant="subtitle1">subtitle1</Typography>}
      {subtitle2 && <Typography variant="subtitle2">subtitle2</Typography>}
      <Divider />
    </>
  );
};

export default PanelHeader;
