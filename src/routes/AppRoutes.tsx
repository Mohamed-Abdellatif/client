
import { Routes, Route } from "react-router";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Home from "../Pages/Home";
import RequireAuth from "../hoc/RequireAuth/RequireAuth";
import MainLayout from "../layout/MainLayout/MainLayout";
import Dashboard from "../Pages/Dashboard";


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthLayout>
              <Home />
            </AuthLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
