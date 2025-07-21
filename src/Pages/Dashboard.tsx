import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ExamsPoster from "../features/posters/ExamsPoster/ExamsPoster";
import AnnouncementsList from "../features/announcements/AnnouncementsList/AnnouncementsList";
import DueList from "../features/quizzes/DueList/DueList";

const Dashboard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Poster full width */}
      <Box mb={3}>
        <ExamsPoster />
      </Box>

      {/* Two-column layout */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <AnnouncementsList />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <DueList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
