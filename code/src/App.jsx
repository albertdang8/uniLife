import React from "react";

import "./Reset.css";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  const homeBanner = {
    title: "Find student homes with bills included",
    subTitle: "A simple and faster way to search for student accommodation",
  };
  const allCitiesBanner = {
    title: "Student Accommodation",
    subTitle:
      "UniLife has student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation."
  };
  const cityDetails = {
    title: "Search Accommodation",
    subTitle: "Whatever you're after, we can help you find the necessary and sufficient student accommodation."
  }

  return (
    <>
      <HomePage homeBanner={homeBanner}/>
      <Footer />
    </>
  );
}

export default App;
