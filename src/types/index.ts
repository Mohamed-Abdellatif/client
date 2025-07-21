// Shared types for the project


// Auth state
export interface AuthState {
  isLoggedIn: boolean;
  user: null | { username: string };
  loading: boolean;
  error: string | null;
}

// Navbar props
export interface NavbarProps {
  handleDrawerToggle: () => void;
}

// Sidebar props
export interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

// Announcement item
export interface Announcement {
  id: number;
  name: string;
  subject: string;
  avatar: string;
  message: string;
}

// Due item
export interface DueItem {
  id: number;
  type: string;
  course: string;
  details: string;
  due: string;
  action: string;
} 