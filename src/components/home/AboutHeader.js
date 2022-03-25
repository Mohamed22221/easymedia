import React from 'react'
import styled from 'styled-components'
import PigTitlePage from '../glopal/PigTitlePage'
import apoutimg from '../../img/02.png'
import animateimg1 from "../../img/flat1.png"
import animateimg2 from "../../img/flat2.png"

const AboutHeader = () => {
  return (
    <AboutHeaderStyle>
      <PigTitlePage title="About"
       h1="var(--background-dark-color)"
       spanprimary="var(--primary-color)"
       />
      <div className='main-apoutmedia'>
        <div className='left-apout'>
        <p>A paragraph is a group of related subdivisions of a research paper begin and end and, thus, help th sentences that support one main idea. In general, paragraphs consist of three parts: the topic sentence, body sentences, and the concluding or the bridge sentence to the next paragraph or section. Paragraphs show where the subdivisions of a research paper begin and end and, thus, help the  related sentences that support reader see the organization of the essay and grasp its main points.</p>
        </div>
        <div className='right-apout'>
          <img src={apoutimg} />
        </div>
        
          <img src={animateimg1} className="animateimg1"/>
          <img src={animateimg2} className="animateimg2"/>


      
      </div>
     
    </AboutHeaderStyle>
  )
}
const AboutHeaderStyle =styled.div`
position: relative;

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
.left-apout{
  width: 50%;
  line-height: 28px;
  color: var(--font);
@media (max-width:550px) {
  width:100%
}  
}
.right-apout{
  position: absolute;
  right: 4rem;
  top: 0;
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
  img{
    width: 250px;
    
@media (max-width:550px) {
 width: 150px;
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