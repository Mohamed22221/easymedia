import React from 'react'
import styled from 'styled-components'

const Form = ({name ,placeholder ,type}) => {
  return (
    <StyleMainForm>
        <lapel>{name}</lapel>
        <input placeholder={placeholder} type={type}/>


    </StyleMainForm>
  )
}
const StyleMainForm = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
position: relative;
lapel{
    position: absolute;
    background-color: white;
    top: 10px;
    left: 18px;
    color: var(--primary-color);
    font-weight: bold;

}
input{
    border: 1px solid #8b8b8b; ;
    width:350px;
    padding:20px 30px ;

}
` 

export default Form