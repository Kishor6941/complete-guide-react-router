import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {

  return JSON.parse(localStorage.getItem("isLogin")) ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes;
