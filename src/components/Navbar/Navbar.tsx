import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { logout } from "../../features/auth/AuthSlice/authSlice";

const drawerWidth = 200;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface NavbarProps {
  handleDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleDrawerToggle }) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: "white",
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
          sx={{
            flexGrow: 1,
            textAlign: "start",
            color: "#757c79",
            fontWeight: 600,
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "2rem" },
            transition: "font-size 0.2s",
          }}
        >
          Welcome, Talia
        </Typography>

        {/* Only show these on desktop */}
        {!isMobile && (
          <>
            <Search
              sx={{
                color: "#757c79",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: 8,
                mr: 2,
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ color: "black", borderColor: "black" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

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
              sx={{ color: "#42899e" }}
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
                <Search
                  sx={{
                    color: "#757c79",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    borderRadius: 8,
                    my: 1,
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{ color: "black", borderColor: "black" }}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Badge badgeContent={10} color="error" sx={{ mr: 1 }}>
                  <NotificationsIcon sx={{ color: "#42899e" }} />
                </Badge>
                Notifications
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Badge badgeContent={4} color="error" sx={{ mr: 1 }}>
                  <MailIcon sx={{ color: "#42899e" }} />
                </Badge>
                Mail
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <AccountCircle sx={{ color: "#42899e", mr: 1 }} /> Account
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
