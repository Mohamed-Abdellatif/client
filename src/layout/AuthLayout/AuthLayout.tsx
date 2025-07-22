import { Box, Paper } from "@mui/material";
import type { ReactNode } from "react";
import "./AuthLayout.scss";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box className="auth-layout-root">
      <Paper elevation={3} className="auth-layout-paper">
        <Box className="auth-layout-inner">{children}</Box>
      </Paper>
    </Box>
  );
};

export default AuthLayout;
