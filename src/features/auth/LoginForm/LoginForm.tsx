import { Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { login } from "../AuthSlice/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    // Use mock credentials for now
    dispatch(login({ username: "testuser", password: "password" }));
  };

  return (
    <>
      <Button onClick={handleLogin} disabled={loading} variant="contained">
        {loading ? <CircularProgress size={24} /> : t("login_button")}
      </Button>
      {error && (
        <Typography color="error" mt={2}>
          {t("login_failed")}
        </Typography>
      )}
    </>
  );
};

export default LoginForm;
