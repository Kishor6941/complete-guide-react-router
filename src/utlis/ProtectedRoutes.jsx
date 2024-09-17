import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { globalContext } from "../context/GlobalContext";

const ProtectedRoutes = () => {
 let isLogin = useContext(globalContext)
return isLogin ? (
    <Outlet />
  ) : (
     <Navigate to="/" />
  );
};

export default ProtectedRoutes;
