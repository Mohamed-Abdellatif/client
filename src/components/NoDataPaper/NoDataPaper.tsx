import { Paper, Typography } from "@mui/material";
import type { PaperProps } from "@mui/material";
import React from "react";

interface NoDataPaperProps extends PaperProps {
  message: React.ReactNode;
  minHeight?: number | string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const NoDataPaper: React.FC<NoDataPaperProps> = ({
  message,
  minHeight = 300,
  children,
  sx,
  ...paperProps
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        minHeight,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...paperProps}
    >
      <Typography variant="body1" fontWeight={500} gutterBottom>
        {message}
      </Typography>

      {children}
    </Paper>
  );
};

export default NoDataPaper;
