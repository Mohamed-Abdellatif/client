// MainLayout.tsx
import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainLayout.scss";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box className="main-layout-root">
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box component="main" className="main-layout-main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
