import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem("enaya-token");
  //   const id = localStorage.getItem("myot_admin_id" || "user_id");

  if (!token) {
    Swal.fire({
      icon: "warning",
      title: "Please Login",
      text: "Click on My Account to login",
      showConfirmButton: true,
      timer: false,
    });
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoutes;
