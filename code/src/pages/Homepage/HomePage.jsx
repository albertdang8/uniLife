import React from "react";
import { TbWorldSearch } from "react-icons/tb";
import { MdChecklistRtl, MdOutlineReceiptLong, MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";

import "./HomePage.css";

function HomePage({ homeBanner }) {
  return (
    <div>
      <Header />
      <Slider homeBanner={homeBanner} />
      HomePage
      <div className="bottom-container">
        <h2 className="feature-title">Compare all inclusive student homes.</h2>
        <div className="features row">
          <div className="feature-section column j-center a-center">
            <TbWorldSearch size={64} className="feature-icon" />
            <h4 className="section-title">Search</h4>
            <p>
              Find your dream home in the perfect area near your university.
            </p>
          </div>
          <div className="feature-section column j-center a-center">
            <MdChecklistRtl size={64} className="feature-icon" />
            <h4 className="section-title">Compare</h4>
            <p>Compare student accomodation to find the right home for you.</p>
          </div>
          <div className="feature-section column j-center a-center">
            <MdOutlineReceiptLong size={64} className="feature-icon" />
            <h4 className="section-title">Bills Included</h4>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
      </div>
      <div className="quality-container row">
        <div className="quality-left">
          <div className="feature-item row">
            <MdOutlineRealEstateAgent size={64} className="feature-icon" />
            <div className="column">
              <h4 className="section-title">Best Selection</h4>

              <p>
                This is the best selection of student accommodations. It has
                never been easier to find a home that's right for you.
              </p>
            </div>
          </div>
          <div className="feature-item row">
            <AiOutlineHeart size={64} className="feature-icon" />
            <div className="column">
              <h4 className="section-title">Your favorite</h4>
              <p>
                Shortlist your favourite properties and send enquiries with one
                click.
              </p>
            </div>
          </div>
        </div>
        <div className="quality-right">

        </div>
      </div>
    </div>
  );
}

export default HomePage;
