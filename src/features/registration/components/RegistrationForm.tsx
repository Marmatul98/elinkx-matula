import { Form, Formik } from "formik";
import type { RegistrationFormValues } from "../types/registrationFormValues.ts";
import { Button } from "@mui/material";
import REGIONS from "../constants/regions.ts";
import { Select, TextField } from "../../../components/form";
import registrationSchema from "../validation/registrationSchema.ts";

const initialValues: RegistrationFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  region: "",
};

const RegistrationForm = () => {
  const handleSubmit = (values: RegistrationFormValues) => {
    console.log(values);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={registrationSchema}
    >
      <Form>
        <TextField name={"firstName"} label={"First Name"} />
        <TextField name={"lastName"} label={"Last Name"} />
        <TextField name={"username"} label={"Username"} />
        <TextField name={"email"} label={"Email"} />
        <Select name={"region"} values={REGIONS} />
        <Button type={"reset"}>Reset</Button>
        <Button type={"submit"}>Submit</Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
