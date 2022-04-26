import React from 'react'
import styled from 'styled-components'
const FormSubscripe = () => {
  return (
    <StyleForm><h4>Enter the correct information to subscribe</h4></StyleForm>
  )
}
const StyleForm= styled.div`
position: relative;
z-index: 1;
background-color: white;
width: 900px;
height: 80vh;
padding: 2rem;
margin: 40px auto;
box-shadow: 1px 5px 24px 1px rgba(0,0,0,0.48);
-webkit-box-shadow: 1px 5px 24px 1px rgba(0,0,0,0.48);
-moz-box-shadow: 1px 5px 24px 1px rgba(0,0,0,0.48);
overflow-y: auto;
border-radius: 10px;
h4{
    text-align: center;
}
@media (max-width:1100px) {
  padding: 1rem 2.5rem;
  margin: 10px auto;
  width: 90%;
  height: 74vh;
}
@media (max-width:320px) {

  height: 70vh;
}



`
export default FormSubscripe