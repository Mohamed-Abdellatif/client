import { Box, Paper } from "@mui/material";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6fa",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthLayout;