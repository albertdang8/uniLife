import React from "react";
import {
  AiOutlineCopyright,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

import { BiLogoFacebookCircle } from "react-icons/bi";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="contact-info-container row">
        <div className="contact-info-left column">
          <h3 className="footer-title">Keep in touch</h3>
          <p className="contact-text">
            Curious about new offereings? Sign up for our weekly newsletter and
            stay informed.
          </p>
          <input
            className="footer-input"
            type="text"
            placeholder="Your email"
          />
        </div>
        <div className="contact-info-right column">
          <h3 className="footer-title">Let's Socialize</h3>
          <div className="icon-item ">
            <BiLogoFacebookCircle size={32} className="space"/>
            <p>facebook</p>
          </div>
          <div className="icon-item ">
            <AiFillTwitterCircle size={32} className="space"/>
            <p>twitter</p>
          </div>
          <div className="icon-item ">
            <AiFillInstagram size={32} className="space"/>
            <p>instagram</p>
          </div>
        </div>
      </div>
      <div className="btm-foot-container">
        <div className="btm-left row a-center">
          <a className="ftr-anchor" href="#">About Us</a>
          <a className="ftr-anchor" href="#">Terms & Conditions</a>
          <a className="ftr-anchor" href="#">Privacy & Cookie Policies</a>
        </div>
        <div className="btm-right row a-center">
          <p className="year">2023</p>
          <div className="a-center row">
            <AiOutlineCopyright size={24} />
            <p>UniLife</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
