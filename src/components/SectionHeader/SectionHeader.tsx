import { Box, Typography, Button } from "@mui/material";
import "./SectionHeader.scss";

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
    <Box className="section-header" mb={mb}>
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      {buttonText && (
        <Button
          variant="text"
          onClick={onButtonClick}
          className="section-header__button"
          {...buttonProps}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
}
