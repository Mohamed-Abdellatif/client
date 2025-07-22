import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useMediaQuery, useTheme, Badge } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { logout } from "../../features/auth/AuthSlice/authSlice";
import { useTranslation } from "react-i18next";
import SearchBar from "../SearchBar/SearchBar";
import type { NavbarProps } from "../../types";
import "./Navbar.scss";
import { drawerWidth } from "../../utils/constants";

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle }) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  // State for mobile dropdown menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Use mock credentials for now
    dispatch(logout());
  };
  return (
    <AppBar
      position="fixed"
      className="navbar-appbar"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* Mobile hamburger */}
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h4"
          noWrap
          component="div"
          className="navbar-title"
          sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem", md: "2rem" } }}
        >
          {t("welcome")}
        </Typography>

        {/* Only show these on desktop */}
        {!isMobile && (
          <>
            <SearchBar
              placeholder={t("search_placeholder")}
              sx={{
                color: "#757c79",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: 8,
                mr: 2,
              }}
            />
            <IconButton size="large" color="inherit" sx={{ color: "#42899e" }}>
              <Badge badgeContent={10} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ color: "#42899e" }}>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              className="navbar-icon"
              onClick={handleLogout}
            >
              <AccountCircle />
            </IconButton>
          </>
        )}

        {/* Mobile: right-side arrow for dropdown menu */}
        {isMobile && (
          <>
            <IconButton
              aria-label="open navbar menu"
              edge="end"
              onClick={handleMenuOpen}
              sx={{ color: "#42899e", ml: 1, display: { md: "none" } }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem>
                <SearchBar
                  placeholder={t("search_placeholder")}
                  sx={{
                    color: "#757c79",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    borderRadius: 8,
                    my: 1,
                  }}
                />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Badge badgeContent={10} color="error" sx={{ mr: 1 }}>
                  <NotificationsIcon sx={{ color: "#42899e" }} />
                </Badge>
                {t("notifications")}
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Badge badgeContent={4} color="error" sx={{ mr: 1 }}>
                  <MailIcon sx={{ color: "#42899e" }} />
                </Badge>
                {t("mail")}
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <AccountCircle sx={{ color: "#42899e", mr: 1 }} />{" "}
                {t("account")}
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
