import React, { useState, useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';
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
          <Link onClick={boxHandler} href="#Home"  to="/easymedia#Home" >
          <img src={logo} alt="photo" />
            </Link>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            
            <Link onClick={boxHandler}   to="/easymedia#Home" >
              Home
            </Link>
          </li>
          <li>
          <Link onClick={boxHandler}  to="/easymedia#About" >
              About us
            </Link>
          </li>
          <li>
          <Link onClick={boxHandler}  to="/easymedia#Services" >
          Services
            </Link>
          </li>
          <li>
          <Link onClick={boxHandler}   to="/easymedia#Contact" >
             Contact
            </Link>
          </li>
          <li>
          <Link onClick={boxHandler}   to="/easymedia#Portfolio" >
              Portfolio
            </Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/easymedia#Client" >
             Client
            </Link>
          </li>
          <li>
            
            <Link onClick={boxHandler}  to="/Careers" >
            Careers
            </Link>
          </li>
          <li>
            
            <Link onClick={boxHandler}  to="/subscribe" >
            Subscribe
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