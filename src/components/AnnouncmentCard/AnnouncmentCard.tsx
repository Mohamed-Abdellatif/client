import { Avatar, ListItemAvatar, ListItemText } from '@mui/material'
import type { Announcement } from '../../types';

const AnnouncmentCard = ({ announcment }: { announcment: Announcement }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar>{announcment.avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<><b>{announcment.name}</b> <span style={{ color: '#888', fontSize: 13, marginLeft: 8 }}>{announcment.subject}</span></>}
        secondary={announcment.message}
      />
    </>
  )
}

export default AnnouncmentCard