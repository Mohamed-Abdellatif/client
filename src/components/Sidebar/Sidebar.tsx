import "./Sidebar.scss";
import React from "react";
import { Drawer, Box, useTheme, useMediaQuery } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useTranslation } from "react-i18next";
import type { SidebarProps } from "../../types";
import SidebarList from "../SidebarList/SidebarList";
import { drawerWidth } from "../../utils/constants";

const sidebarItems = [
  { text: "dashboard", icon: <HouseIcon /> },
  { text: "schedule", icon: <CalendarMonthIcon /> },
  { text: "courses", icon: <MenuBookIcon /> },
  { text: "gradebook", icon: <SchoolIcon /> },
  { text: "performance", icon: <AutoGraphIcon /> },
  { text: "announcement", icon: <CampaignIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Box
      component="nav"
      className="sidebar-nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      {/* Mobile drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          className="bg-blue"
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          <SidebarList sidebarItems={sidebarItems} t={t} />
        </Drawer>
      )}

      {/* Desktop drawer */}
      <Drawer
        className="bg-blue"
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        <SidebarList sidebarItems={sidebarItems} t={t} />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
