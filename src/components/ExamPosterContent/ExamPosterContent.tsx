import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ExamPosterContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        {t("exams_time")}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {t("exams_time_subtitle")}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        fontStyle="italic"
        gutterBottom
      >
        {t("exams_time_quote")}
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" size="large">
          {t("view_exams_tips")}
        </Button>
      </Box>
    </>
  );
};

export default ExamPosterContent;
