import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footerlogo" src={assets.logo} alt="" />
          <p>
            "An authentic Sri Lankan dining experience, where every plate
            carries the warmth of home and the spirit of the island."
          </p>
          <div className="footer-socila-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 12 346 789</li>
            <li>contact@kamukoo.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrtigt">© 2025 Kamukoo. All Rights Reserved.</p>
    </div>
  );
};

export default footer;
