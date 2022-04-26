import React from 'react'
import styled from 'styled-components'
import svgsupscripe from "../../img/supscripe.svg" 

const BackGround = () => {
  return (
    <StyleBackGround><img src={svgsupscripe} /></StyleBackGround>
  )
}
const StyleBackGround = styled.div`
position: relative;

img{
position: fixed;
left: 0;
top: 0;
z-index: 0;
transform: rotate(180deg);
height: 100vh;
}

`
export default BackGround