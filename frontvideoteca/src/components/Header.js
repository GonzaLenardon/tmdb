import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container bg-lg">
      <Link to="/api/user/login">
        <p>Login</p>
      </Link>
      <Link to="/api/user/adduser">
        <p>Nuevo Usuario</p>
      </Link>
    </div>
  );
};
