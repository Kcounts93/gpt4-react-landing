import React from "react";
import "./social.css";
import { mem, harvey, speak, ambience, material } from "./imports";
const Social = () => {
  return (
    <div className="gpt4__social">
      <div>
        <img src={mem} />
      </div>
      <div>
        <img src={harvey} />
      </div>
      <div>
        <img src={speak} />
      </div>
      <div>
        <img src={ambience} />
      </div>
      <div>
        <img src={material} />
      </div>
    </div>
  );
};

export default Social;
