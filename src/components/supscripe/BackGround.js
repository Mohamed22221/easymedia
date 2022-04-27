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
width: 100%;
img{
position: fixed;
left: 0;
top: 0;
z-index: 0;
background-position: center center;
height: 100vh;
background-size: contain;
}

`
export default BackGround