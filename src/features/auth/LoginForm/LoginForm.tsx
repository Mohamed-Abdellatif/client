import {
  Button,
  CircularProgress,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/store";
import { login } from "../AuthSlice/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import "./LoginForm.scss";
import { testEmail, testPassword } from "../../../utils/constants";

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Box component="form" onSubmit={handleLogin} className="login-form">
      <TextField
        label={t("email")}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        fullWidth
        margin="normal"
      />
      <Typography variant="caption" color="text.secondary">
        {t("test_email")} {testEmail}
      </Typography>
      <TextField
        label={t("password")}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
        fullWidth
        margin="normal"
      />
      <Typography variant="caption" color="text.secondary">
        {t("test_password")} {testPassword}
      </Typography>
      <Button type="submit" disabled={loading} variant="contained">
        {loading ? <CircularProgress size={24} /> : t("login_button")}
      </Button>
      {error && (
        <Typography color="error" className="login-form-error">
          {t("login_failed")}
        </Typography>
      )}
    </Box>
  );
};

export default LoginForm;
