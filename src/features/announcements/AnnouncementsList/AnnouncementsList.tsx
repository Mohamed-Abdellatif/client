import { CircularProgress, Paper, Typography } from "@mui/material";
import GenericList from "../../../components/GenericList/GenericList";
import GenericCard from "../../../components/GenericCard/GenericCard";
import AnnouncementCard from "../../../components/AnnouncementCard/AnnouncementCard";
import { useTranslation } from "react-i18next";
import { useAnnouncementQuery } from "../../../queries/useAnnouncementsQuery";
import type { Announcement } from "../../../types";

const AnnouncementsList = () => {
  const { data: announcements, isLoading } = useAnnouncementQuery();
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <Paper elevation={3} sx={{ p: 2, minHeight: 350 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          <CircularProgress size={44} />
        </Typography>
      </Paper>
    );
  }
  if (!announcements || announcements.length === 0) {
    return (
      <Paper elevation={3} sx={{ p: 2, minHeight: 350 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {t("noAnnouncements")}
        </Typography>
      </Paper>
    );
  }
  
  return (
    <Paper elevation={3} sx={{ p: 2, minHeight: 350 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {t("announcements")}
      </Typography>
      <GenericList
        items={announcements}
        renderItem={(announcement: Announcement, idx, arr) => (
          <GenericCard
            key={announcement?._id}
            showDivider={idx < arr.length - 1}
            dividerProps={{ variant: "inset" }}
          >
            <AnnouncementCard announcement={announcement} />
          </GenericCard>
        )}
      />
    </Paper>
  );
};

export default AnnouncementsList;
