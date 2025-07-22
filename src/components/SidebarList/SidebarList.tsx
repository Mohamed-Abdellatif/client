import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import "./SidebarList.scss";

interface SidebarListProps {
  sidebarItems: { text: string; icon: React.ReactNode }[];
  t: (key: string) => string;
}

const SidebarList: React.FC<SidebarListProps> = ({ sidebarItems, t }) => (
  <div className="sidebar-list-root">
    <Box className="sidebar-list-box">
      <Typography variant="h5" className="sidebar-title">
        {t("coligo")}
      </Typography>
    </Box>
    <List>
      {sidebarItems.map(({ text, icon }, index) => (
        <ListItem key={text} disablePadding className="sidebar-list-item">
          <ListItemButton className={index === 0 ? "active-link" : undefined}>
            <ListItemIcon className="sidebar-list-icon">{icon}</ListItemIcon>
            <ListItemText primary={t(text)} className="sidebar-list-text" />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);

export default SidebarList;
