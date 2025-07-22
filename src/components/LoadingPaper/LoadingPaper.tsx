import { Paper, Typography, CircularProgress } from "@mui/material";
import type { ReactNode } from "react";
import "./LoadingPaper.scss";

interface LoadingPaperProps {
  minHeight?: number | string;
  size?: number;
  children?: ReactNode;
}

export default function LoadingPaper({
  minHeight = 300,
  size = 44,
  children,
}: LoadingPaperProps) {
  return (
    <Paper elevation={3} className="loading-paper" style={{ minHeight }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        {children ? children : <CircularProgress size={size} />}
      </Typography>
    </Paper>
  );
}
