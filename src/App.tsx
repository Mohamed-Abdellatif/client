import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./Pages/Dashboard";
import RequireAuth from "./hoc/RequireAuth/RequireAuth";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./Pages/Home";
import AuthLayout from "./layout/AuthLayout/AuthLayout";

function App() {
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

export default App;
