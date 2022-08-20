import React from 'react'
import styled from 'styled-components'
import animatRocket from "../../img/animat-rocket.gif"


const Loading = () => {
  return (
    <MainLoading >
     <div className='imgs'>
     <img src={animatRocket} />
     <h4 >easymedia</h4>
     </div>
    </MainLoading>
  )
}
const MainLoading = styled.div`
 position: fixed;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
 background-color: var(--primary-color);
 z-index: 1001;
transition:0.5s ;
 
 .imgs{
  
   img{
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50% , -45%);
  width: 200px;
 }
 h4{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50% , -60%);
  color: white;
  font-size: 22px;
 }
 }

`



export default Loading