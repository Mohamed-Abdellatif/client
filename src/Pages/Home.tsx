import LoginForm from "../features/auth/LoginForm/LoginForm";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h5" fontWeight="bold" align="center" mb={3}>
        {t("login_heading")}
      </Typography>
      <LoginForm />
    </>
  );
};

export default Home;
