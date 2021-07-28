import React from "react";
import classes from "./ShowControls.module.css";

const ShowControls = (props) => {
  return (
    <div className={classes.ShowControls}>
      <button>Brown</button>
      <button>Green</button>
      <button>Purple</button>
    </div>
  );
};

export default ShowControls;
