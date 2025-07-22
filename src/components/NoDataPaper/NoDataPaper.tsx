import { Paper, Typography } from "@mui/material";
import type { PaperProps } from "@mui/material";
import React from "react";
import "./NoDataPaper.scss";

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
      className="no-data-paper"
      sx={{ minHeight, ...sx }}
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
