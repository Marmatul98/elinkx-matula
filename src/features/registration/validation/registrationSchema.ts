import * as yup from "yup";

const registrationSchema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  username: yup.string().required("Uživatelské jméno je povinné"),
  email: yup
    .string()
    .email("Zadejte validní e-mail")
    .required("E-mail je povinný"),
  region: yup.string(),
});

export default registrationSchema;
