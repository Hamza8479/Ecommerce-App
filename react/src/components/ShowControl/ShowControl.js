import React from "react";
import classes from "./ShowControl.module.css";

const ShowControl = (props) => {
  return (
    <div className={classes.ShowControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.added}>Add</button>
    </div>
  );
};

export default ShowControl;
