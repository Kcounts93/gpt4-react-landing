import React from "react";
import Feature from "../../components/feature/Feature";
import "./about.css";

const About = () => {
  return (
    <div className="gpt4__about section__margin" id="about">
      <div className="gpt4__about-feature">
        <Feature
          title="What is ChatGPT-4"
          text="Following the AI research path from GPT, GPT-2, and GPT-3, ChatGPT-4's deep learning approach leverages more data and more computation to create increasingly sophisticated and capable language models."
        />
      </div>
      <div className="gpt4__about-heading">
        <h1 className="gradient__text">
          GPT-4 surpasses ChatGPT in its advanced reasoning capabilities.
        </h1>
        <p>
          <a href="#blog">Browse our articles</a>
        </p>
      </div>
      <div className="gpt4__about-container">
        <Feature
          title="Creativity"
          text="GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style."
        />
        <Feature
          title="Visual input"
          text="GPT-4, with its advanced capabilities, can accept images as inputs and generate detailed captions, precise classifications, and in-depth analyses, thereby expanding its utility in various applications."
        />
        <Feature
          title="Longer context"
          text="GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis."
        />
      </div>
    </div>
  );
};

export default About;
