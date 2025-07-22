import { Paper } from "@mui/material";
import ExamPosterContent from "../../../components/ExamPosterContent/ExamPosterContent";
import "./ExamsPoster.scss";

const ExamsPoster = () => {
  return (
    <Paper elevation={3} className="exams-poster-paper">
      <ExamPosterContent />
    </Paper>
  );
};

export default ExamsPoster;
