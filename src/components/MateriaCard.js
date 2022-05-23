import React from "react";
import classes from "./MateriaCard.module.css";

const MateriaCard = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <h3 className={classes.title}>Programacion I</h3>
        <p>
          <span>Semestre: </span>2
        </p>
        <p>
          <span>Dictado por: </span>Mark Zucherberg
        </p>
        <p>
          <span>Horarios: </span>Lunes:07:45, Martes:10:00.....
        </p>
      </div>
    </div>
  );
};

export default MateriaCard;
