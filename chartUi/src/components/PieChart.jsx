import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";

const valueFormatter = (item) => `${item.value}%`;

export default function PieAnimation({ formData }) {
  const chartData = [
    { label: "Windows", value: Number(formData.window || 0) },
    { label: "Linux", value: Number(formData.linux || 0) },
    { label: "Chrome", value: Number(formData.chrome || 0) },
    { label: "Firefox", value: Number(formData.firefox || 0) },
    { label: "Android", value: Number(formData.android || 0) },
    { label: "iOS", value: Number(formData.ios || 0) },
  ];

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <PieChart
        height={320}
        width={320}
        series={[
          {
            data: chartData,
            innerRadius: 10,
            arcLabel: (params) => params.label ?? "",
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
      />
    </Box>
  );
}
