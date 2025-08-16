import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

export default function CustomTextField({
  label,
  onChange,
}: {
  label: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <TextField
      id="outlined-basic"
      onChange={onChange}
      label={label}
      variant="outlined"
      fullWidth
    />
  );
}
