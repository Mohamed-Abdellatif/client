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
          sx={{ flexGrow: 1, textAlign: "start", color: "#757c79",fontWeight:600 }}
        >
          Welcome, Talia
        </Typography>

        <Search
          sx={{
            color: "#757c79",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: 8,
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
          edge="end"
          color="inherit"
          sx={{ color: "#42899e" }}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
