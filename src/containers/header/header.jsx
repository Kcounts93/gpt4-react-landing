import React from "react";
import "./header.css";
import ai from "../../assets/gpt4-hero.png";
import { RiArrowRightUpLine } from "react-icons/ri";

const header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <p>Chat GPT-4</p>
        <h1 className="gradient__text">
          OpenAI’s most advanced system, producing safer and more useful
          responses
        </h1>
        <p>
          GPT-4 has the capability to solve complex and challenging problems
          with enhanced precision and efficiency, thanks to its expansive
          general knowledge base and advanced problem-solving abilities, which
          enable it to understand and interpret a wide range of topics more
          effectively.
        </p>

        <div className="gpt4__header-buttons">
          <button type="button">
            Try ChatGPT
            <RiArrowRightUpLine size={20} />
          </button>
          <p>
            <a href="#features" className="button-secondary">
              View features
            </a>
          </p>
        </div>
      </div>

      <div className="gpt4__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default header;
