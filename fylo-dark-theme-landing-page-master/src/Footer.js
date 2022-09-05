import React from "react";
import flogo from "./images/logo.svg";
import phoneIcon from "./images/icon-phone.svg";
import emailIcon from "./images/icon-email.svg";
import fb from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import insta from "./images/icon-instagram.svg";
const Footer = () => {
  return (
    <>
      <div id="footer" style={{ color: "white" }}>
        <img src={flogo} alt="footer-logo" />
        <div>
          <div className="footer-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="icon-text"><img src={phoneIcon} alt="phone"/><span>+1-543-123-4567</span></p>
            <p className="icon-text"><img src={emailIcon} alt="email" /><span>example@fylo.com</span></p>
          </div>
          <ul className="footer-item">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className="footer-item">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul className="social-icons">
            <li><img src={fb} alt="fb" /></li>
            <li><img src={twitter} alt="twitter" /></li>
            <li><img src={insta} alt="instagram" /></li>
          </ul>
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://www.frontendmentor.io/profile/thisisharsh7">
            Harsh Kumar
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default Footer;
