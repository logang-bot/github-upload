import React from "react";
import { Routes, Route } from "react-router-dom";

import classes from "./Home.module.css";

import Sidebar from "../../components/Sidebar";

import Employees from "./Employees";
import Stats from "./Stats";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className={classes.menu}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="stats" element={<Stats />} />
      </Routes>
    </div>
  );
};

export default Home;
