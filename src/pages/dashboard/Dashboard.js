import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import classes from "./Dashboard.module.css";
import { ClientRequests } from "../../lib/api";
import { authActions } from "../../store/auth";
import { errorActions } from "../../store/error";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllClients = async () => {
      const result = await ClientRequests.getAll(null);
      console.log(result);
      setClients(
        result.data.data.filter((client) =>
          client.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    };
    const fetchClients = setTimeout(() => {
      console.log("fetching");
      getAllClients();
    }, 1000);

    return () => {
      clearTimeout(fetchClients);
    };
  }, [search]);

  const actionHandler = async () => {
    dispatch(authActions.setLogout());
  };

  const onSearchHandler = async (e) => {
    setSearch(e.target.value);
  };

  const trigger = () => {
    dispatch(errorActions.setError("Dashboard error"));
  };

  return (
    <div className={classes["menu-wrapper"]}>
      <menu className={classes.menu}>
        <p>Dashboard</p>
        <section className={classes["search-section"]}>
          <input type="text" onChange={onSearchHandler} />
          <ul>
            {clients.map((client) => (
              <li key={client._id}>
                <h3>{client.name}</h3>
                <p>
                  CI: <em>{client.ci}</em>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </menu>
      <button onClick={actionHandler}>logout</button>
      <button onClick={trigger}>Trigger error</button>
    </div>
  );
};

export default Dashboard;
