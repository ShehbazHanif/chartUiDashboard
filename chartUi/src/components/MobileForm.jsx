import { Box, Stack, TextField, Typography } from "@mui/material";

const mobileFields = [
  { key: "android", label: "Android" },
  { key: "ios", label: "iOS" },
];

export default function MobileForm({ formData, onChange }) {
  return (
    <Box
      sx={{ p: 2, borderRadius: 2, boxShadow: 1, bgcolor: "background.paper" }}>
      <Typography variant="h6" gutterBottom>
        Mobile OS
      </Typography>
      <Stack spacing={2}>
        {mobileFields.map((field) => (
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
