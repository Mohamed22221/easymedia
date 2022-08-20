import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import dream from "../../img/dream.jpg"
import BackGround from "../../img/wave-haikei.svg"
import superimg from "../../img/01.png"
import animateimg from "../../img/flat1.png"
import animateimg1 from "../../img/flat2.png"
import svgAnimate from "../../img/svg-animate.svg"
import Button from '../glopal/Button'

const SecHeader = () => {
  return (
    <MainSecHeader>
      <Container maxWidth="lg">
        <div className='main-header-content'>

          <div className='left-header'>
            <div className='super-img' data-aos-anchor-placement="top-bottom">
              <img src={superimg} alt="photo" />
            </div>
            <div className='animateimg-2'>
              <img src={animateimg} alt="photo" className="animateimg1" />

            </div>
            <div className='animateimg-3'>
              <img src={animateimg1} alt="photo" className="animateimg2" />
            </div>

          </div>
          <div className='right-header'>

            <h1 data-aos="fade-down">Easy Way</h1>
            <p data-aos="zoom-in">easier way to find  your superpower.</p>
            <Button title="Know More" />

          </div>
        </div>


      </Container>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>

      </div>
    </MainSecHeader>
  )
}
const MainSecHeader = styled.div`
    background-image: url(${BackGround}); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 1;
    opacity: 1;
   &::after{
    content: "";
      position: absolute;
      top: 0px;
      right: 0;
      left: 0;
      bottom: 0px;
      background-image: url(${dream});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      opacity: 0.1;
   }
   .main-header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    @media (max-width:780px) {
     flex-direction: column-reverse;
     margin-top: 10px;
    }
    
   .left-header{
    position: relative;
    .super-img{
     -webkit-animation-name: MoveUpDown;
    -moz-animation-name: MoveUpDown;
    animation-name: MoveUpDown;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
     animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
     animation-direction: alternate;
    animation-timing-function: linear;
      
     img{
     width: 680px;
     transform: scaleX(-1);
     @media (max-width:780px) {
      margin-top: 150px;
      width: 430px;
    }
    @media (max-width:500px) {
      margin-top: 30px;
      width: 330px;
    }
    @media (max-width:330px) {
      margin-top: 10px;
      width: 200px;
    }
    }

   }
   //ANIMATE TWO IMG
   .animateimg-2{
    position: absolute;
    top: 180px;
    z-index: -1;
    @media (max-width:500px) {
      top:70px ;
     
    }
    img{
     width: 150px;
     
    }
   }
   //ANIMATE three IMG
    .animateimg-3{
    position: absolute;
    top: 190px;
    left: 330px;
    z-index: -1;
    @media (max-width:500px) {
      top:100px ;
     left: 100px;
    }
    img{
     width: 150px;
     animation: Rotate 9s linear infinite;
    }
   }

   }
   //right top
   .right-header{
    color: white;
    text-align: center;
    h1{
      padding: 10px 0;
     font-size: 90px;
     font-weight: bold;
     @media (max-width:560px) {
      font-size: 50px;
     }
    }
    p{
     font-weight: bold;
     font-size: 20px;
     @media (max-width:480px) {
      font-size: 16px;
     }
    }
   }

  }

  .ocean { 
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: white;
  
  
}

.wave {
  background: url(${svgAnimate}) repeat-x; 
  
  position: absolute;
  top: -198px;
  width: 4000px;
  height: 198px;
  animation: wave 8s cubic-bezier( 0.36, 0.45, 0.55 , 0.36) infinite  ;
  transform: translate3d(0.2, 0.2, 0.2);
  @media (max-width:550px ) {
    width: 1000px;
  }
}

.wave:nth-of-type(2) {
  bottom: 0;
  animation: wave 18s linear reverse infinite;
  opacity: 0.8;
  color: var(--primary-color);
}

.wave:nth-of-type(3) {
  bottom: 0;
  animation: wave 20s -1s linear infinite;
  opacity: 0.5;
}


@keyframes wave {
    0% {transform: translateX(0);}
    30% {transform: translateX(-20%);}
    60% {transform: translateX(-50%);}
    80% {transform: translateX(-20%);}
    100% {transform: translateX(0%);}


}
`
export default SecHeader