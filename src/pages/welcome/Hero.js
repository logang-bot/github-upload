import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <Fragment>
      <header className={classes["hero-header"]}>
        <nav className={classes["hero-nav"] + " " + classes["hero-container"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classes["logo-icon"]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <Link to="/login">SignIn</Link>
          <Link to="./#">Acerca de</Link>
        </nav>
        <div className={classes["hero-header-content"]}>
          <div className={classes["hero-header-slogan"]}>
            <h1>Universidad Autonoma Ficticia</h1>
            <p>
              Trabajamos cada dia para garantizar el mejor servicio a nuestro
              personal y futuros profesionales, sientase libre de consultarnos
              en todo momento.
            </p>
            <button className={classes["more-info"]}>
              <Link to="/signUp">Registrate</Link>
            </button>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Hero;
