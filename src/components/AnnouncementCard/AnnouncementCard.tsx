import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import type { Announcement } from "../../types";

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar>{announcement.avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <b>{announcement.name}</b>{" "}
            <span style={{ color: "#888", fontSize: 13, marginLeft: 8 }}>
              {announcement.subject}
            </span>
          </>
        }
        secondary={announcement.message}
      />
    </>
  );
};

export default AnnouncementCard;
