import { Paper } from "@mui/material";
import ExamPosterContent from "../../../components/ExamPosterContent/ExamPosterContent";

const ExamsPoster = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f8fcff",
      }}
    >
      <ExamPosterContent />
    </Paper>
  );
};

export default ExamsPoster;
