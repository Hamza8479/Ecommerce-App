import React from "react";
import ShowContent from "../ShowContent/ShowContent";
import classes from "./ImplementContent.module.css";
const ImplementContent = (props) => {
  let transformedContent = Object.keys(props.content)
    .map((ingKey) => {
      return [...Array(props.content[ingKey])].map((_, i) => {
        return <ShowContent key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedContent.length === 0) {
    transformedContent = <p>Please Add Content!</p>;
  }
  return (
    <div className={classes.ImplementContent}>
      <ShowContent type="container" />
      {transformedContent}
      <ShowContent type={"box"} />
    </div>
  );
};

export default ImplementContent;
