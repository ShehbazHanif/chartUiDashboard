import { Box, Stack, TextField, Typography } from "@mui/material";

const desktopFields = [
  { key: "window", label: "Windows" },
  { key: "linux", label: "Linux" },
  { key: "chrome", label: "Chrome" },
  { key: "firefox", label: "Firefox" },
];

export default function DesktopForm({ formData, onChange }) {
  return (
    <Box
      sx={{
        mb: 3,
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
        bgcolor: "background.paper",
      }}>
      <Typography variant="h6" gutterBottom>
        Desktop OS
      </Typography>
      <Stack spacing={2}>
        {desktopFields.map((field) => (
          <TextField
            key={field.key}
            label={field.label}
            name={field.key}
            type="number"
            value={formData[field.key]}
            onChange={(event) => onChange(field.key, event.target.value)}
            inputProps={{ min: 0, step: "0.01" }}
          />
        ))}
      </Stack>
    </Box>
  );
}
