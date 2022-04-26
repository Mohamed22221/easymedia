import React from 'react'
import styled from 'styled-components'
import RightSupscripe from './RightSupscripe'
import FormData  from "./FormData"
const FormSubscripe = () => {
  return (
    <StyleForm>
      <StyleLeftSupscripe>
      <RightSupscripe />
      </StyleLeftSupscripe>
      <StyleRightSupscripe>
      <FormData />
      </StyleRightSupscripe>
    </StyleForm>
  )
}
const StyleForm= styled.div`
display: flex;
position: relative;
z-index: 1;
background-color: white;
width: 1100px;
right: 0;
height: 80vh;
margin: 40px auto;
box-shadow: 1px 5px 24px 1px rgba(0,0,0,0.48);
-webkit-box-shadow: 1px 5px 24px 1px rgba(0,0,0,0.48);
-moz-box-shadow: 1px 5px 24px 1px rgba(0,0,0,0.48);
overflow-y: auto;
border-radius: 10px;
overflow: hidden;

@media (max-width:1200px) {
  width: 80%;
}
@media (max-width:1000px) {
  margin: 10px auto;
  width: 90%;
  flex-direction: column;
}
@media (max-width:800px) {
  height: 100%;
}
`
const StyleRightSupscripe= styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 50%;
@media (max-width:1000px) {
width: 100%;
}
overflow: auto;

&::-webkit-scrollbar {
  width: 7px;
}

&::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 10px;
}
&::-webkit-scrollbar-track {
  background-color: var(--font);
}
@media (max-width:490px) {
    justify-content: center;
    
  }

`
const StyleLeftSupscripe= styled.div`
width: 50%;

@media (max-width:1000px) {
width: 100%;
}

`
export default FormSubscripe