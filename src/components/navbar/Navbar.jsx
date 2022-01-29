import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_container">
          <p>
            <a href="#home"> Home </a>
          </p>
          <p>
            <a href="#projects"> Projects </a>
          </p>
          <p>
            <a href="#resume"> Resume </a>
          </p>
          <p>
            <a href="#contact"> Contact </a>
          </p>
        </div>
      </div>
      <div className="portfolio__navbar-menu">
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
          <div className="portfolio__navbar-menu_container scale-up-tr">
            <div className="portfolio__navbar-menu_container-links">
              <p>
                <a href="#home"> Home </a>
              </p>
              <p>
                <a href="#projects"> Projects </a>
              </p>
              <p>
                <a href="#resume"> Resume </a>
              </p>
              <p>
                <a href="#contact"> Contact </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
