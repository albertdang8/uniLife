import React from "react";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";

import "./HomePage.css";

function HomePage({ homeBanner }) {

  return (
    <div>
      <Header />
      <Slider homeBanner={homeBanner}/>
      HomePage
    </div>
  );
}

export default HomePage;