import React from "react";
import logo from "../../assets/openai.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={logo} alt="gpt4_logo" />
          <p>
            OpenAI © 2015 – 2023 <br />
          </p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Links</h4>
          <p>Twitter</p>
          <p>YouTube</p>
          <p>GitHub</p>
          <p>SoundCloud</p>
          <p>LinkedIn</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Company</h4>
          <p>Terms & policies </p>
          <p>Privacy policy</p>
          <p>Brand guidelines</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Get in touch</h4>
          <p>San Francisco, California</p>
          <p>(505)444-1241</p>
          <p>contact@openai.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
