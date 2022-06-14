import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';
const Button = ({title}) => {
  return (
          <StyleButtom >
            <div className="banner">
              <Link   to="/easymedia#About"  className='butn butn__new'><span>{title}</span></Link>
            </div>
          </StyleButtom>

  )
}
const StyleButtom= styled.div`
  display: flex;
    justify-content: center;
    margin: 18px 0;
    .butn:link,
.butn:visited {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
 
  text-decoration: none;
  background-color:white;
  padding: 1rem 2rem;
  height: 3.5rem;
  width: 15rem;
  margin-right: 13px;
  border-radius: 40px;
  border: none;
  color: var( --primary-color);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.butn::before {
  background: var(--primary-color);
  content: "";
  height: 155px;
  opacity: 0;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  width: 50px;
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
}
.butn::after {
  background:var(--primary-color);
  content: "";
  height: 20rem;
  opacity: 0.3;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 3000ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 4rem;
}
.butn__new::before {
  left: -50%;
}

.butn__new::after {
  left: -100%;
}

.butn:hover,
.butn:active {
  transform: translateY(-3px);
  color: var( --primary-color);
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
}

.butn__new:hover::before {
  left: 120%;
  opacity: 0.5s;
}

.butn__new:hover::after {
  left: 200%;
  opacity: 0.6;
}
.butn span {
  z-index: 20;
}

`

export default Button