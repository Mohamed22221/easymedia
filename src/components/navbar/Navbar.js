import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return (
    
      <nav>
         
          <div className="logo">
            <img src={logo} />
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            <Link onClick={boxHandler} to="/easymedia">
              Home
            </Link>
          </li>
          <li>
            <a onClick={boxHandler} to="/about">
              About us
            </a>
          </li>
          <li>
            <a onClick={boxHandler} to="/about">
              Services
            </a>
          </li>
          <li>
            <a onClick={boxHandler} to="/about">
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={boxHandler} to="/contact">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
          
       
      </nav>
    
  );
};

export default Navbar;