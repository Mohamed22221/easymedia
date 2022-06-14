import React from 'react'
import styled from 'styled-components'
import PigTitlePage from '../glopal/PigTitlePage'
import apoutimg from '../../img/02.png'
import animateimg1 from "../../img/flat1.png"
import animateimg2 from "../../img/flat2.png"

const AboutHeader = () => {
  
  return (
    <AboutHeaderStyle id='About'>
      
      <PigTitlePage title="About"
       h1="var(--background-dark-color)"
       spanprimary="var(--primary-color)"
       />
      <div className='main-apoutmedia'>
        <div className='left-apout'>
        <p data-aos="fade-right">Easy Media is a Marketing Company based in 
        Kuwait. In today’s day and age, marketing is very in-
        tegral to any company that aims for success. Our 
        Job is to assist the companies in their marketing 
        journey, making it fruitful and successful. Our 
        target market is very much dependent on our cli-
        ents, target market, as we shape each and every 
        plan carefully for our clients, needs to best serve 
        their interests. We enable our clients to reach 
        their goals by removing the barriers in their way 
        that stop them from reaching their potential. </p>
        </div>
        <div className='right-apout'>
          <img src={apoutimg} alt="photo" data-aos="fade-down" />
        </div>
        
          <img src={animateimg1} alt="photo" className="animateimg1" data-aos="fade-down"/>
          <img src={animateimg2} alt="photo" className="animateimg2" data-aos="fade-down"/>


      
      </div>
     
    </AboutHeaderStyle>
  )
}
const AboutHeaderStyle =styled.div`
position: relative;
height: 100%;

.main-apoutmedia{
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 4rem;

@media (max-width:1000px) {
  padding: 2.5rem;
  
}
@media (max-width:550px) {
  flex-direction:column;
  height: 80vh;
}
@media (max-width:376px) {
  flex-direction:column;
  height: 110vh;
}
.left-apout{
  width: 50%;
  line-height: 28px;
  color: var(--font);

@media (max-width:550px) {
  width:100%

}  
@media (max-width:370px) {
font-size: 13px;

}  
}
.right-apout{
  position: absolute;
  right: 4rem;
  bottom:  0;
  z-index: 1;
  align-items: flex-start;
  -webkit-animation-name: MoveUpDownLeft;
    -moz-animation-name: MoveUpDownLeft;
    animation-name: MoveUpDownLeft;
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
    
@media (max-width:550px) {
  top: 480px;
} 
@media (max-width:376px) {
  top: 585px;
  width: 120px;
}   
  img{
    width: 250px;
    
@media (max-width:550px) {
 width: 130px;
}   

  }
}
.animateimg1{
  position: absolute;
  right: 13rem;
  width: 150px;
  z-index: 0;
  @media (max-width:550px) {
    right: 5rem;
  top: 590px;
}   
}
.animateimg2{
  position: absolute;
  bottom:  50px;
  right: 18rem;
  width: 80px;
  z-index: 0;
  -webkit-animation: Rotate 9s linear infinite;
   animation: Rotate 9s linear infinite;
   @media (max-width:550px) {
    right: 15rem;   
  top: 600px;
}  
}

}


`
export default AboutHeader