import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import dream from "../../img/dream.jpg"
import BackGround from "../../img/wave-haikei.svg"
import superimg from "../../img/01.png"
import animateimg from "../../img/flat1.png"
import animateimg1 from "../../img/flat2.png"
import Button from '../glopal/Button'

const SecHeader = () => {
 return (
  <MainSecHeader>
   <Container maxWidth="lg">
    <div className='main-header-content'>

     <div className='left-header'>
      <div className='super-img' data-aos-anchor-placement="top-bottom">
       <img src={superimg} alt="photo" data-aos="fade-up" />
      </div>
      <div className='animateimg-2'>
       <img src={animateimg} alt="photo" className="animateimg1" data-aos="fade-down" />

      </div>
      <div className='animateimg-3'>
       <img src={animateimg1} alt="photo" className="animateimg2" data-aos="fade-up" />
      </div>

     </div>
     <div className='right-header'>
     
      <h1 data-aos="fade-down">Easy Way</h1>
      <p data-aos="zoom-in">easier way to find  your superpower.</p>
      <Button title="Know More" />

     </div>

    </div>


   </Container>
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
    margin-top: 90px;
    @media (max-width:780px) {
     flex-direction: column-reverse;
     margin-top: 40px;
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
      width: 450px;
    }
    @media (max-width:500px) {
      margin-top: 110px;
      width: 330px;
    }
    @media (max-width:330px) {
      margin-top: 20px;
      width: 300px;
    }
    }

   }
   //ANIMATE TWO IMG
   .animateimg-2{
    position: absolute;
    top: 180px;
    z-index: -1;
    
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
    }
   }
  }




`
export default SecHeader