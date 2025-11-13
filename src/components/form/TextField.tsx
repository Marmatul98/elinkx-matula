import {
  type BaseTextFieldProps,
  Skeleton,
  TextField as MUITextField,
} from "@mui/material";
import { useField } from "formik";

interface TextFieldProps extends BaseTextFieldProps {
  name: string;
  loading?: boolean;
}

const TextField = ({ name, label, loading, ...props }: TextFieldProps) => {
  const [field, meta] = useField(name);

  return loading ? (
    <Skeleton variant={"rounded"} width={"100%"} height={56} />
  ) : (
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
