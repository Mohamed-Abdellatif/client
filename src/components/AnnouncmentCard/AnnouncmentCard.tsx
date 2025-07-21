import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import type { Announcement } from '../../types';


const AnnouncmentCard = ({ announcment, announcementsLength, idx }: { announcment: Announcement; announcementsLength: number; idx: number }) => {
  return (
    < >
            <ListItem alignItems="flex-start" >
              <ListItemAvatar>
                <Avatar>{announcment.avatar}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<><b>{announcment.name}</b> <span style={{ color: '#888', fontSize: 13, marginLeft: 8 }}>{announcment.subject}</span></>}
                secondary={announcment.message}
              />
            </ListItem>
            {idx < announcementsLength - 1 && <Divider variant="inset" component="li" />}
          </>
  )
}

export default AnnouncmentCard