import React from "react";
import classes from "./ShowControls.module.css";
import ShowControl from "../ShowControl/ShowControl";

const controls = [
  { label: "Brown", type: "cont" },
  { label: "Green", type: "cont1" },
  { label: "Purple", type: "cont2" },
];

const ShowControls = (props) => {
  return (
    <div className={classes.ShowControls}>
      {controls.map((ctrl) => (
        <ShowControl
          label={ctrl.label}
          added={() => props.contentAdded(ctrl.type)}
        />
      ))}
    </div>
  );
};

export default ShowControls;
