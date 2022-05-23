import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { authActions } from "../../store/index";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(authActions.setLogout());
    navigate("/");
  };

  return (
    <nav className={classes.main}>
      <div>
        <img
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="profile"
        />
        <NavLink to="/admin/profile">Naruto</NavLink>
      </div>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to="home"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to="docentes"
      >
        Docentes
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? classes.active : "")}
        to="materias"
      >
        Materias
      </NavLink>

      <button onClick={logOutHandler}>LogOut</button>
    </nav>
  );
};

export default Navbar;
