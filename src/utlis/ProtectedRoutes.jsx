import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { globalContext } from "../context/GlobalContext";

const ProtectedRoutes = () => {
 let token = useContext(globalContext)
return token ? (
    <Outlet />
  ) : (
     <Navigate to="/" />
  );
};

export default ProtectedRoutes;
