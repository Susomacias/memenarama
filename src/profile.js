import "./reset.min.css";
import "./App.css";
import "./Navbar.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    isAuthenticated && (
      <ul className="nav__wrapper">
        <li className="nav__item">
          {user.name}
        </li>
        <li className="nav__item">
        <img src={user.picture} alt={user.name} />
        </li>
      </ul>
    )
  );
};
