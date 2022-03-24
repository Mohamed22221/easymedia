import React from 'react'
import styled from 'styled-components'
import superimg from "../../img/01.png"
import animateimg from "../../img/flat1.png"
import animateimg1 from "../../img/flat2.png"
import Button from '../glopal/Button'


const Header = ({title}) => {
  return (
    <HeaderStyle>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1925 1047.96">
        <g id="Group_11" data-name="Group 11" transform="translate(1 -100)">
          <path id="Path_13" data-name="Path 13" d="M1920,1032.05V100H0v933.49c36.85,18.07,72.05,33.47,105.71,46.51H719.97c59.48-21.81,118.45-42.27,197.93-48.43l87.68-.14c70.44,5.94,121.9,26.55,175.63,48.57h634.5Z" fill="#e53516" />
          <path id="Path_14" data-name="Path 14" d="M917.9,1031.57c-79.48,6.16-138.45,26.62-197.93,48.43-49.84,18.26-100.04,37.47-162.97,50-109.51,21.8-253.71,26.56-451.29-50C72.05,1066.96,36.85,1051.56,0,1033.49c-.33-.16-.67-.33-1-.49H0Z" fill="#e53516" />
          <path id="Path_15" data-name="Path 15" d="M1924,1030c-1.33.69-2.67,1.38-4,2.05-36.23,18.6-70.98,34.47-104.29,47.95-215.53,87.19-371.18,74.15-484.71,50-59.47-12.65-105.4-31.81-149.79-50-53.73-22.02-105.19-42.63-175.63-48.57l914.42-1.42Z" fill="#e53516" />
        </g>
      </svg>
      <div className='content-header'>
        <div className='left-header'>
          <div className='super-img'>
            <img src={superimg} />
          </div>
          <div className='animateimg-2'>
            <img src={animateimg} className="animateimg1" />

          </div>
          <div className='animateimg-3'>
            <img src={animateimg1} className="animateimg2" />
          </div>
        </div>
        <div className='right-header'>
          <h1>Easy Way</h1>
          <p>With easy media everything is too easy .</p>
          <Button title="Know More"/>

        </div>
      </div>

    </HeaderStyle>
  )
}
const HeaderStyle = styled.header`
margin: 0;
padding: 0;
position: relative;
overflow: hidden;
@media (max-width:763px) {
     width: 100%;
     height: 100vh;
  }
svg{
    background-size: cover;
    top: 0;
    width: 101%;
}
.content-header{
  
  display: flex;
  bottom:  0;
  z-index: 1;
  .left-header{
    .super-img {
      position: absolute;
      top: 30%;
      left: 0;
      transform: translateY(-30%);
      z-index: 2;
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
    
      @media (max-width:663px) { 
      top: 320px ;
      transform: translateY(0%);
    }
      img{
        width: 800px;
       transform: scaleX(-1);
      

     @media (max-width:1416px) {
        width: 500px;
  }
  
    @media (max-width:950px) {
        width: 400px;
  }
    @media (max-width:663px) { 
      width:380px ;  
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  
      }



    }
    .animateimg-3{
      position: absolute;
      top: 30%;
      left:590px;
      @media (max-width:1516px) {
        left:290px;
      }
    @media (max-width:804px) { 
      top:45%  
  
      }
      .animateimg2{
          width: 90px;
          color: white;
          z-index: -1;
          -webkit-animation: Rotate 9s linear infinite;
          animation: Rotate 9s linear infinite;

      }
      
    }
    .animateimg-2{
      position: absolute;
      top: 30%;
      left:190px;
      @media (max-width:763px) { 
      top:40%  ;
      left:20px ;
  
      }
      .animateimg1{
          width: 190px;
          color: white;
          z-index: -1;
         
        }
        }
      }
  }
  .right-header{
    position: absolute;
    right: 6rem;
    transform: translateY(-30%);
    top: 30%;
    color: white;
    @media (max-width:1216px) {
      top:35%
      
  }
  @media (max-width:763px) { 
      top: 0px ; 
      left: 0;
      right: 0;
      transform: translateY(0%);
    }
    h1{
      font-size: 110px;
      text-align: center;

    }
    p{
      font-size: 30px;
      text-align: center;
    }
    @media (max-width:1916px) {
      h1{
        font-size: 130px;
      }
      p{
      font-size: 30px;
    }
    @media (max-width:1216px) {
      h1{
        font-size: 85px;
      }
      p{
      font-size: 25px;
    }
    @media (max-width:950px) {
      h1{
        font-size: 70px;
      }
      p{
      font-size: 20px;
    }
  }
  @media (max-width:763px) { 
    h1{
      font-size: 60px;
      text-align: center;
    }
    p{
      font-size: 15px;
    }
    }

  }
}
  }
`
export default Header