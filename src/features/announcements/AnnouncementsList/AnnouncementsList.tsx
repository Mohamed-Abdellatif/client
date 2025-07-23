import { Paper } from "@mui/material";
import GenericList from "../../../components/GenericList/GenericList";
import GenericCard from "../../../components/GenericCard/GenericCard";
import AnnouncementCard from "../../../components/AnnouncementCard/AnnouncementCard";
import { useTranslation } from "react-i18next";
import { useAnnouncementQuery } from "../../../queries/useAnnouncementsQuery";
import type { Announcement } from "../../../types";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import LoadingPaper from "../../../components/LoadingPaper/LoadingPaper";
import NoDataPaper from "../../../components/NoDataPaper/NoDataPaper";
import "./AnnouncementsList.scss";

import { useEffect } from 'react';
import { useSocket } from "../../../socket/SocketProvider";

const AnnouncementsList = () => {
  const { data: announcements, isLoading, refetch } = useAnnouncementQuery();
  const { t } = useTranslation();
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;
    const handleNewAnnouncement = () => {
      refetch();
    };
    socket.on('announcement:new', handleNewAnnouncement);
    return () => {
      socket.off('announcement:new', handleNewAnnouncement);
    };
  }, [socket, refetch]);

  if (isLoading) {
    return <LoadingPaper />;
  }
  if (!announcements || announcements.length === 0) {
    return <NoDataPaper message={t("noAnnouncements")} minHeight={300} />;
  }

  return (
    <Paper elevation={3} className="announcements-list-paper">
      <SectionHeader title={t("announcements")} buttonText={t("all")} mb={2} />

      <GenericList
        items={announcements}
        renderItem={(announcement: Announcement) => (
          <GenericCard
            key={announcement?._id}
            showDivider={false}
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
