import React from 'react'
import styled from 'styled-components'

const Input = ({placeholder , error, type ,Label ,ChangeValue , ...Aloot}) => {

  return (
    <StyleMainForm>
        <label>{Label}</label>
        <input {...Aloot} type={type} placeholder={placeholder}  onChange={ChangeValue}/>
        <span>{error}</span>
    </StyleMainForm>
  )
}
const StyleMainForm = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
position: relative;
label{
    position: absolute;
    background-color: white;
    top: 22px;
    left: 18px;
    color: var(--primary-color);
    font-weight: bold;
}
input{
  margin: 15px 0;
    border: 1px solid #8b8b8b; ;
    padding:20px 30px ;
}
span{
  color: red;
}
` 

export default Input