import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default HomePage;
