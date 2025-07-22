import { Avatar, Box, ListItemAvatar } from "@mui/material";
import type { Announcement } from "../../types";

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <>
      <Box display="flex ">
        {/* Left side: Avatar + name/subject */}
        <Box display="flex" minWidth={220} >
          {/* Avatar */}
          <Box flexDirection="column" justifyContent="center">
            <ListItemAvatar>
              <Avatar src={announcement.avatar} />
            </ListItemAvatar>
          </Box>

          {/* Name + Subject */}
          <Box display="flex" flexDirection="column" justifyContent="center">
            <span style={{ fontWeight: "bold" }}>{announcement.name}</span>
            <span style={{ color: "#888", fontSize: 15  }}>
              {announcement.subject}
            </span>
          </Box>
        </Box>

        {/* Right side: Message */}
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          sx={{ borderLeft: "2px solid #e0e0e0", paddingLeft: 2 }}
        >
          <span style={{ color: "#666", fontSize: 14 }}>
            {announcement.message}
          </span>
        </Box>
      </Box>
    </>
  );
};

export default AnnouncementCard;
