import { Form, Formik } from "formik";
import type { RegistrationFormValues } from "../types/registrationFormValues.ts";
import { Button, Grid, Typography } from "@mui/material";
import { Select, TextField } from "../../../components/form";
import registrationSchema from "../validation/registrationSchema.ts";
import { useEffect, useState } from "react";
import { fetchRegions, type Regions } from "../../../api/regions.ts";

const initialValues: RegistrationFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  region: "",
};

const RegistrationForm = () => {
  const [regions, setRegions] = useState<Regions[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSubmit = (values: RegistrationFormValues) => {
    console.log(values);
  };

  useEffect(() => {
    fetchRegions().then((data) => {
      setRegions(data);
      setLoading(false);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant={"h3"}>Registrace</Typography>
      </Grid>
      <Grid size={12} container>
        <Grid size={12}>
          <Typography variant={"h5"}>Registrační formulář</Typography>
        </Grid>
        <Grid size={12} container>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={registrationSchema}
          >
            <Form style={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"firstName"}
                    placeholder={"Vaše jméno"}
                    label={"Jméno"}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"lastName"}
                    placeholder={"Vaše příjmení"}
                    label={"Příjmení"}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"username"}
                    placeholder={"Vaše uživatelské jméno"}
                    label={"Uživatelské jméno"}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"email"}
                    placeholder={"Váš e-mail"}
                    label={"E-mail"}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Select
                    fullWidth
                    label={"Kraj"}
                    name={"region"}
                    values={regions}
                    loading={loading}
                  />
                </Grid>
                <Grid size={12} container sx={{ justifyContent: "flex-end" }}>
                  <Button
                    type={"reset"}
                    variant={"contained"}
                    color={"secondary"}
                    disabled={loading}
                  >
                    VYMAZAT
                  </Button>
                  <Button
                    type={"submit"}
                    variant={"contained"}
                    disabled={loading}
                  >
                    ODESLAT
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
