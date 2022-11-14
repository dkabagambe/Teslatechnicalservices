import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdGeneratingTokens } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);
  return (
    <div>
      <div className="App__navbar">
        <div className="App__navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="App__navbar-links">
          <Link to="/">Home</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/about">About</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Tool & Equipments</Link>
          <Link to="/contact">Contacts</Link>
        </div>
        <div className="App__navbar-smallscreen">
          <GiHamburgerMenu
            color="#66ff00"
            cursor="pointer"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="App__navbar-smallscreen-overlay flex__center slide-bottom">
              <MdGeneratingTokens
                color="#44a6c6"
                fontSize={30}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <Link to="/">Home</Link>
              <Link to="/mission">Mission</Link>
              <Link to="/about">About</Link>
              <Link to="/clients">Clients</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/services">Tool & Equipments</Link>
              <Link to="/contact">Contacts</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
