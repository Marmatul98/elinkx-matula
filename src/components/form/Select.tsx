import {
  type BaseSelectProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material";
import { useField } from "formik";

interface SelectProps extends BaseSelectProps {
  name: string;
  values: { value: string | number; label: string }[];
  fullWidth?: boolean;
}

const Select = ({ name, values, label, fullWidth, ...props }: SelectProps) => {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <MUISelect
        {...props}
        {...field}
        error={meta.touched && !!meta.error}
        labelId={`${name}-label`}
        label={label}
      >
        {values.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
