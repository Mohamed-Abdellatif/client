
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import type { JSX } from 'react';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
