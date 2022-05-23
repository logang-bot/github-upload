import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./Sidebar.module.css";

import ErrorCard from "./ErrorCard";

const Sidebar = () => {
  const isError = useSelector((state) => state.error.isError);
  const errMessage = useSelector((state) => state.error.errorMessage);
  return (
    <aside className={classes.menu}>
      {isError && <ErrorCard>{errMessage}</ErrorCard>}
      <ul>
        <li>
          <NavLink to={"/"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/employees"}>Employees</NavLink>
        </li>
        <li>
          <NavLink to={"/stats"}>Stats</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
