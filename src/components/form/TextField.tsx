import {
  type BaseTextFieldProps,
  TextField as MUITextField,
} from "@mui/material";
import { useField } from "formik";

interface TextFieldProps extends BaseTextFieldProps {
  name: string;
}

const TextField = ({ name, label, ...props }: TextFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <MUITextField
      {...field}
      {...props}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      name={name}
      label={label}
    />
  );
};

export default TextField;
