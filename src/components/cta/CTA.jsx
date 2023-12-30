import React from "react";
import "./cta.css";
import { RiArrowRightUpLine } from "react-icons/ri";

const CTA = () => {
  return (
    <div className="gpt4__cta">
      <div className="gpt4__cta-content">
        <p>Begin using GPT-4</p>
        <h3>Sign up & start exploring the endless possibilities with GPT-4</h3>
      </div>
      <div className="gpt4__cta-btn">
        <button type="button">
          Get started
          <RiArrowRightUpLine size={20} />
        </button>
      </div>
    </div>
  );
};

export default CTA;
