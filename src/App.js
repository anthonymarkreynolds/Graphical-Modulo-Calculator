import "./App.css";
import Layout from "./components/Layout";
import Polygon from "./components/Polygon";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function App() {
  const [sides, updateSides] = useState(3);
  return (
    <>
      <Layout>
        <Polygon sides={sides} />
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Sides"
            defaultValue={[3, 12]}
            getAriaValueTExt={`Sides: ${sides}`}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={3}
            max={30}
            onChange={(e) => updateSides(e.target.value[0])}
          />
        </Box>
      </Layout>
    </>
  );
}

export default App;
