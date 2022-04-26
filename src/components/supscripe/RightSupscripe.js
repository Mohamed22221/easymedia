import React from 'react'
import styled from 'styled-components'
import superimg from "../../img/01.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dream from "../../img/dream.jpg"
const RightSupscripe = () => {
  return (
    <StyleRightSupscripe>
      <div>
      <h4>Please enter the correct information to subscribe</h4>
      <div className='supscripe-now'>
      <h2>Subscribe Now</h2>
      <span> <ArrowForwardIcon className='supscripe-icon' /></span>
      </div>
      </div>
      <div>
        <img src={superimg} />
      </div>
    </StyleRightSupscripe>
  )
}
const StyleRightSupscripe = styled.div`
position: relative;
z-index: 1;
background-color: var(--primary-color);
height: 100%;
padding: 10px 0;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
&::before{
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-image: url(${dream});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 0;
      opacity: 0.1;
      
    }
h4,h2{
text-align: center;
padding: 10px 5px;
z-index: 1;
@media (max-width:800px) {
  font-size: 14px;
}
}
img{
  width: 450px;
 transform: scaleX(-1);
 @media (max-width:800px) {
  width: 250px;
}
}
.supscripe-now{
  display: flex;
  align-items: center;
  justify-content: center;
}
.supscripe-icon{
  margin-top: 9px;
}
`
export default RightSupscripe