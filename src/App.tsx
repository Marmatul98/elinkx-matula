import { RegistrationForm } from "./features/registration";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ maxWidth: { xs: "100%", lg: "63rem" }, mx: "auto" }}>
      <RegistrationForm />
    </Box>
  );
}

export default App;
