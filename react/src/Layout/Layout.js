import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import Builder from "../container/Builder/Builder";

const Layout = (props) => {
  return (
    <Auxiliary>
      {/* <div> NavBar</div> */}
      {/* <main>{props.children}</main> */}
      <Builder />
    </Auxiliary>
  );
};

export default Layout;
