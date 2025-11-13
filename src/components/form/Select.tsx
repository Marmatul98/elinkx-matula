import {
  type BaseSelectProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  Skeleton,
} from "@mui/material";
import { useField } from "formik";

interface SelectProps extends BaseSelectProps {
  name: string;
  values: { value: string | number; label: string }[];
  fullWidth?: boolean;
  loading?: boolean;
}

const Select = ({
  name,
  values,
  label,
  fullWidth,
  loading,
  ...props
}: SelectProps) => {
  const [field, meta] = useField(name);

  return loading ? (
    <Skeleton variant={"rounded"} width={"100%"} height={56} />
  ) : (
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
