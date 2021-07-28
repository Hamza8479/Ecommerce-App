import React from "react";
import classes from "./ShowContent.module.css";
import ProtoTypes from "prop-types";

const ShowContent = (props) => {
  let content = null;
  switch (props.type) {
    case "container":
      content = <div className={classes.container}></div>;
      break;
    case "cont":
      content = <div className={classes.cont}></div>;
      break;
    case "cont1":
      content = <div className={classes.cont1}></div>;
      break;
    case "cont2":
      content = <div className={classes.cont2}></div>;
      break;
    case "box":
      content = <div className={classes.box}></div>;
      break;
    default:
      content = null;
  }
  return content;
};

ShowContent.protoTypes = {
  type: ProtoTypes.string.isRequired,
};

export default ShowContent;
