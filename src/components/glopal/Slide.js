import React from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel";
import logo from"../../img/logo.png"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1600, itemsToShow: 5 }

];



const Slide = () => {
  return (
    <SliderStyle data-aos="fade-down">
     <Carousel breakPoints={breakPoints}>
        <div className='item'><img src={logo}/></div>
        <div className='item'><img src={logo}/></div>
        <div className='item'><img src={logo}/></div>
        <div className='item'><img src={logo}/></div>
        <div className='item'><img src={logo}/></div>
        <div className='item'><img src={logo}/></div>
        <div className='item'><img src={logo}/></div>
        <div className='item'><img src={logo}/></div>
      </Carousel>
    </SliderStyle>
  )
}
const SliderStyle = styled.div`
padding: 7rem 4rem;
@media (max-width:500px) {
  padding: 7rem 2rem;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: white;
  color: #fff;
  margin: 0 15px;
  font-size: 2em;
 

  img{
    height: 80px;
    opacity: 0.9;
    transition: 0.4s;
    &:hover{
      opacity: 1;
    }
  }
}
.rec-dot_active {
    background-color: var(--primary-color) !important;
    box-shadow: 0 0 1px 3px var(--primary-color) !important;
}
.rec-dot:focus,
.rec-dot:hover {
    box-shadow: 0 0 1px 3px var(--primary-color) !important;
}
.rec-dot_active:focus,
.rec-dot_active:hover {
    background-color: var(--primary-color) !important;
    box-shadow: 0 0 1px 3px var(--primary-color) !important;
}
.rec-arrow{
  color: var(--primary-color);
  background-color: white;
  border: none;
  border-radius: none;
  font-size: 3.2rem;
  transition: all 0.5s ease;
  box-shadow: 0 0 0px 0px  !important;
  @media (max-width:500px) {
  display:none
}
  &:hover, :focus{
    background-color: white;
    color: var(--primary-color);
  }
  
}



`
export default Slide