import "./Sidebar.css";
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CampaignIcon from "@mui/icons-material/Campaign";
const drawerWidth = 200;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const sidebarItems = [
  { text: "Dashboard", icon: <HouseIcon /> },
  { text: "Schedule", icon: <CalendarMonthIcon /> },
  { text: "Courses", icon: <MenuBookIcon /> },
  { text: "Gradebook", icon: <SchoolIcon /> },
  { text: "Performance", icon: <AutoGraphIcon /> },
  { text: "Announcement", icon: <CampaignIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen,
  handleDrawerToggle,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const drawerContent = (
    <>
      <Box sx={{ px: 2, py: 1, mx: 1 }}>
        <Typography variant="h5" sx={{ color: "white" }}>
          Coligo
        </Typography>
      </Box>
      <List>
        {sidebarItems.map(({ text, icon }, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              marginTop: 2,
              ...(index === 0 && {
                backgroundColor: "white",
              }),
            }}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  ...(index === 0
                    ? { color: "#064d75" } // solid fallback of gradient
                    : { color: "white" }),
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                slotProps={{
                  primary: {
                    sx:
                      index === 0
                        ? {
                            background:
                              "linear-gradient(to bottom, #064d75, #2c8ebf)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 600,
                          }
                        : {
                            color: "white",
                          },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
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
          {drawerContent}
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
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
