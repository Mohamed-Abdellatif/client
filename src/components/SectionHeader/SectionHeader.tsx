import { Box, Typography, Button } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonProps?: object;
  mb?: number | string;
}

export default function SectionHeader({
  title,
  buttonText,
  onButtonClick,
  buttonProps,
  mb = 2,
}: SectionHeaderProps) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={mb}
    >
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      {buttonText && (
        <Button
          variant="text"
          onClick={onButtonClick}
          sx={{
            color: "#84bab1",
            background: "none",
            border: "none",
            textTransform: "none",
            fontWeight: 600,
            fontSize: 18,
            padding: 0,
            minWidth: 0,
            "&:hover": {
              background: "transparent",
            },
          }}
          {...buttonProps}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
}
