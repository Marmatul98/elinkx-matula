import * as yup from "yup";

const registrationSchema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  region: yup.string(),
});

export default registrationSchema;
