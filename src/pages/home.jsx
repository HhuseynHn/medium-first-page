/** @format */

import React from "react";
import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer/footer";
import Title from "../components/reusable/title/title";
import Button from "../components/reusable/button/button";
import "./style.css";
import Membership from "../components/reusable/member/member";
const Home = () => {
  return (
    <>
      <div className="home-page">
        <Header />
        <div className="home-main-container">
          <div className="home-membership-c">
            {/* <Membership className="home-membership">
              Be part of a better internet
              <a href="">Get 20% off membership for a limited time</a>
            </Membership> */}
          </div>

          <div className="home-section-left">
            <Title className="title-home-page">
              Human <br /> stories & ideas
            </Title>
            <div className="home-content">
              <h3>A place to read, write and deepen your understanding</h3>
            </div>
            <Button className="btn-home-large">Start reading</Button>
          </div>
          <div className="home-section-right">
            <img
              src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
              alt="content-img"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
