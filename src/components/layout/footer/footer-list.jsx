/** @format */

import React from "react";
import footerData from "../../../constant/footer-data";
import FooterItem from "./footer-item";
const FooterList = () => {
  return (
    <>
      <div className="footer-list">
        <ul>
          {footerData.map((list) => (
            <li key={list.id}>
              <FooterItem titleFooter={list.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default FooterList;
