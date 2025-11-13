import { Form, Formik } from "formik";
import type { RegistrationFormValues } from "../types/registrationFormValues.ts";
import { Button, Grid, Typography } from "@mui/material";
import { Select, TextField } from "../../../components/form";
import registrationSchema from "../validation/registrationSchema.ts";
import { useEffect, useState } from "react";
import { fetchRegions, type Region } from "../../../api/regions.ts";
import { useTranslation } from "react-i18next";

const initialValues: RegistrationFormValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  region: "",
};

const RegistrationForm = () => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

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
        <Typography variant={"h3"}>{t("registration.title")}</Typography>
      </Grid>
      <Grid size={12} container>
        <Grid size={12}>
          <Typography variant={"h5"}>{t("registration.subTitle")}</Typography>
        </Grid>
        <Grid size={12} container>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={() => registrationSchema(t)}
          >
            <Form style={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"firstName"}
                    placeholder={t("registration.form.firstName.placeholder")}
                    label={t("registration.form.firstName.label")}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"lastName"}
                    placeholder={t("registration.form.lastName.placeholder")}
                    label={t("registration.form.lastName.label")}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"username"}
                    placeholder={t("registration.form.username.placeholder")}
                    label={t("registration.form.username.label")}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    name={"email"}
                    placeholder={t("registration.form.email.placeholder")}
                    label={t("registration.form.email.label")}
                    loading={loading}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Select
                    fullWidth
                    label={t("registration.form.region.label")}
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
                    {t("registration.form.clear")}
                  </Button>
                  <Button
                    type={"submit"}
                    variant={"contained"}
                    disabled={loading}
                  >
                    {t("registration.form.submit")}
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
