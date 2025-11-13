import * as yup from "yup";
import type { TFunction } from "i18next";

const registrationSchema = (t: TFunction) =>
  yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    username: yup.string().required(t("registration.form.username.required")),
    email: yup
      .string()
      .email(t("registration.form.email.invalid"))
      .required(t("registration.form.email.required")),
    region: yup.string(),
  });

export default registrationSchema;
