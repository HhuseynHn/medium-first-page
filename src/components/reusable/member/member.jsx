/** @format */

import React from "react";
import "./style.css";

const Membership = (props) => {
  return (
    <>
      <h3 className={props.className}>{props.children}</h3>
    </>
  );
};

export default Membership;
