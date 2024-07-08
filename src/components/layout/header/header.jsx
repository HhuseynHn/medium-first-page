/** @format */

import React from "react";
import Logo from "../../reusable/logo/logo";
import NavList from "../../nav/nav-list";
import Button from "../../reusable/button/button";
import "./style.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="hedaer-container">
          <Logo classNameProps="logo-clas">Medium</Logo>
          <div className="header-right-section">
            <NavList />
            <Button className="btn-header">Get started</Button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
