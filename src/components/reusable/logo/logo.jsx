/** @format */

import React from "react";
import "./logo-style.css";

const Logo = (props) => {
  return (
    <>
      <h2 className={props.classNameProps}>{props.children}</h2>
    </>
  );
};

export default Logo;
