import { Box, Button, Typography } from "@mui/material";

const ExamPosterContent = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        EXAMS TIME
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Here we are. Are you ready to fight? Don’t worry, we prepared some tips
        to be ready for your exams.
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        fontStyle="italic"
        gutterBottom
      >
        “Nothing happens until something moves.” – Albert Einstein
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" size="large">
          View exams tips
        </Button>
      </Box>
    </>
  );
};

export default ExamPosterContent;
