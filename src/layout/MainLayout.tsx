// MainLayout.tsx
import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const drawerWidth = 200;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          pt: '64px',
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
