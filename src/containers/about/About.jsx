import React from "react";
import Feature from "../../components/feature/Feature";
import "./about.css";

const About = () => {
  return (
    <div className="gpt4__about section__margin" id="wgpt4">
      <div className="gpt4__about-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt4__about-heading">
        <h1 className="gradient__text">
          GPT-4 surpasses ChatGPT in its advanced reasoning capabilities.
        </h1>
        <p>
          <a href="#blogs">Explore our blogs</a>
        </p>
      </div>
      <div className="gpt4__about-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default About;
