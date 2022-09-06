import React from "react";
import logo from "./images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "red" }}>
        <div>
          <img src={logo} alt="Blogr-logo" />
          <div>
            <h4>Product</h4>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div>
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://www.frontendmentor.io/profile/thisisharsh7">
            Harsh Kumar
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default Footer;
