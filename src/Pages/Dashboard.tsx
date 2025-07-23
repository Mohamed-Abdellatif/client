import Box from "@mui/material/Box";
import ExamsPoster from "../features/posters/ExamsPoster/ExamsPoster";
import AnnouncementsList from "../features/announcements/AnnouncementsList/AnnouncementsList";
import DueList from "../features/quizzes/DueList/DueList";
import "./Dashboard.scss";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Dashboard = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box className="dashboard-root">
      {/* Poster full width */}
      <Box mb={3}>
        <ExamsPoster />
      </Box>

      {/* Responsive two-column layout with flex */}
      {isMdUp ? (
        <Box display="flex" flexDirection="row" gap={2}>
          <Box flexGrow={1} minWidth={0}>
            <AnnouncementsList />
          </Box>
          <Box flexShrink={0} width={320}>
            <DueList />
          </Box>
        </Box>
      ) : (
        <>
          <AnnouncementsList />
          <DueList />
        </>
      )}
    </Box>
  );
};

export default Dashboard;
