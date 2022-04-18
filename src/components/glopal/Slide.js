import React from 'react'
import styled from 'styled-components'
import Carousel from "react-elastic-carousel";
import clint2 from"../../img/clint2.jpg"
import clint1 from"../../img/clint1.jpg"
import clint3 from"../../img/clint3.jpg"
import clint4 from"../../img/clint4.jpg"
import clint5 from"../../img/clint5.png"
import clint6 from"../../img/clint6.svg"

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
        <div className='item'><img src={clint2}/></div>
        <div className='item'><img src={clint5}/></div>
        <div className='item'><img src={clint3}/></div>
        <div className='item'><img src={clint4}/></div>
        <div className='item'><img src={clint6}/></div>
        <div className='item'><img src={clint1}/></div>

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

  width: 100%;
  background-color: white;
  color: #fff;
  margin: 0 15px;
  font-size: 2em;


  img{
    
    width: 170px;
    height:150px ;
   img:nth-child(6){
     width: 70px;
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