import React from 'react'
import styled from 'styled-components'
import svgsupscripe from "../../img/supscripe.svg" 
const BackGround = () => {
  return (
    <StyleBackGround><img src={svgsupscripe} /></StyleBackGround>
  )
}
const StyleBackGround = styled.div`

img{
position: fixed;
bottom: -5px;
right: 0;
left: 0;
z-index: 0;
}
@media (max-width:500px ) {
   
    
}
`
export default BackGround