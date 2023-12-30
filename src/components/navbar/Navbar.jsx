import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiArrowRightUpLine } from "react-icons/ri";
import logo from "../../assets/openai.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gpt4__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt4__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">What is GPT-4?</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#demogpt">Opportunities</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
        </div>
      </div>
      <div className="gpt4__navbar-sign">
        <p>Log in</p>
        <button type="button">
          Try ChatGPT
          <RiArrowRightUpLine size={20} />
        </button>
      </div>
      <div className="gpt4__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt4__navbar-menu_container scale-up-center">
            <div className="gpt4__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">What is GPT-4?</a>
              </p>
              <p>
                <a href="#features">Features</a>
              </p>
              <p>
                <a href="#demogpt">Opportunities</a>
              </p>
              <p>
                <a href="#blog">Blog</a>
              </p>
            </div>
            <div className="gpt4__navbar-menu_container-links-sign">
              <p>Log in</p>
              <button type="button">Try ChatGPT</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
