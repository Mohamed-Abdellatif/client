import { Avatar, Box, ListItemAvatar } from "@mui/material";
import type { Announcement } from "../../types";
import "./AnnouncementCard.scss";

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <>
      <Box className="announcement-card">
        {/* Left side: Avatar + name/subject */}
        <Box className="announcement-card__left">
          {/* Avatar */}
          <Box className="announcement-card__avatar">
            <ListItemAvatar>
              <Avatar src={announcement.avatar} />
            </ListItemAvatar>
          </Box>

          {/* Name + Subject */}
          <Box className="announcement-card__info">
            <span className="name">{announcement.name}</span>
            <span className="subject">{announcement.subject}</span>
          </Box>
        </Box>

        {/* Right side: Message */}
        <Box className="announcement-card__message">
          <span>{announcement.message}</span>
        </Box>
      </Box>
    </>
  );
};

export default AnnouncementCard;
