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
          <Link onClick={boxHandler} href="#Home"  to="/easymedia" >
          <img src={logo} />
            </Link>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            
            <Link onClick={boxHandler} href="#Home"  to="/easymedia" >
              Home
            </Link>
          </li>
          <li>
            <a onClick={boxHandler} href='#About' >
              About us
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Services">
              Services
            </a>
          </li>
          <li>
            <a onClick={boxHandler}  href="#Contact">
              Contact
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Client">
              Client
            </a>
          </li>
          <li>
            
            <Link onClick={boxHandler}  to="/Careers" >
            Careers
            </Link>
          </li>
          
  
        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
          
       
      </nav>
    
  );
};

export default Navbar;