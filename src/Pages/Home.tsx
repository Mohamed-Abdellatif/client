import LoginForm from "../features/auth/LoginForm/LoginForm";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" align="center" mb={3}>
        Login
      </Typography>
      <LoginForm />
    </>
  );
};

export default Home;
