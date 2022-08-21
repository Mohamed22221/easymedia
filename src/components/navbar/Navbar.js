import { Container } from "@mui/material";
import React, { useState, useRef } from "react";
import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
import logo from "../../img/logo.png"
import "./Navbar.css";

const Navbar = () => {
  //toggle nav bar
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return (
    <div className="main-nav">
      <Container maxWidth="lg" className="container-nav" >
        <nav>
          <div className="logo">
            <NavHashLink onClick={boxHandler} href="#Home" to="/easymedia#Home" activeClassName="selected"><img src={logo} alt="photo" /></NavHashLink>
          </div>
          <ul ref={linksContainer} className={toggle ? "active" : ""} activeClassName="selected">
            <li>  <NavHashLink onClick={boxHandler} to="/easymedia#Home" > Home </NavHashLink></li>
            <li><Link onClick={boxHandler} to="/easymedia#About" >About us</Link></li>
            <li><Link onClick={boxHandler} to="/easymedia#Services" > Services</Link></li>
            <li><Link onClick={boxHandler} to="/easymedia#Portfolio" > Portfolio</Link></li>
            <li><Link onClick={boxHandler} to="/easymedia#Client" >Client</Link></li>
            <li><Link onClick={boxHandler} to="/easymedia#Contact" >Contact</Link></li>
            <li> <NavHashLink onClick={boxHandler} to="/Careers" > Careers </NavHashLink></li>
            <li> <NavHashLink onClick={boxHandler} to="/subscribe" >Subscribe</NavHashLink></li>

          </ul>
          <div onClick={handleToggle} className="toggle-button">
            <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;