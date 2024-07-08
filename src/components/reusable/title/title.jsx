/** @format */

import React from "react";
import "./title-style.css";
const Title = (props) => {
  return (
    <>
      <h2 className={props.className}>{props.children}</h2>
    </>
  );
};

export default Title;
