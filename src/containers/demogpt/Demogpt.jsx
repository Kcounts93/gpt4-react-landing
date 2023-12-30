import React from "react";
import "./demogpt.css";
import demogptImage from "../../assets/demogpt.webp";

const Demogpt = () => {
  return (
    <div className="gpt4__demogpt section__padding" id="demogpt">
      <div className="gpt4__demogpt-image">
        <img src={demogptImage} alt="demogpt" />
      </div>
      <div className="gpt4__demogpt-content">
        <h4>Try ChatGPT-4 for free</h4>
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          We spent 6 months making GPT-4 safer and more aligned. GPT-4 is 82%
          less likely to respond to requests for disallowed content and 40% more
          likely to produce factual responses than GPT-3.5 on our internal
          evaluations.
        </p>
        <h4>
          <a href="#">Sign up now</a>
        </h4>
      </div>
    </div>
  );
};

export default Demogpt;
