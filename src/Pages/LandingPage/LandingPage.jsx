import React from "react";
import "./LandingPage.css";
import Header from "../../Components/Header/Header";
import NavPages from "../../NavPages";
import Footer from "../../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="ec-landing-container">
        <div className="ec-landing-top">
          <Header />
        </div>
        <div className="ec-content-div">
          <NavPages />
        </div>
        <div className="ec-landing-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
