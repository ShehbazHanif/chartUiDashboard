import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import PieChart from "./components/PieChart";
import DesktopForm from "./components/DestopForm";
import MobileForm from "./components/MobileForm";

const initialFormData = {
  window: "72.72",
  linux: "3.83",
  chrome: "2.42",
  firefox: "16.38",
  android: "30.48",
  ios: "28.8",
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [chartData, setChartData] = useState(initialFormData);

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateChart = () => {
    setChartData(formData);
  };

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        alignItems: "flex-start",
      }}>
      <Box sx={{ flex: 1, width: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Web usage breakdown
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Change the values and click update to refresh the chart.
        </Typography>
        <DesktopForm formData={formData} onChange={handleFieldChange} />
        <MobileForm formData={formData} onChange={handleFieldChange} />
        <Button variant="contained" onClick={handleUpdateChart} sx={{ mt: 2 }}>
          Update Chart
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
        <PieChart formData={chartData} />
      </Box>
    </Box>
  );
}

export default App;
