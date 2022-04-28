import React, { useState } from 'react'
import styled from 'styled-components'


const Input = ({placeholder , error, type ,Label ,ChangeValue , name , ...Aloot}) => {
const [Foucs , setFouce] =useState(false)
const HandellFoucs = () =>{
  setFouce(true)
}
  return (
    <StyleMainForm>
        <label>{Label}</label>
        <input {...Aloot} type={type} placeholder={placeholder}
         name={name} required  onChange={ChangeValue} 
         onBlur={HandellFoucs} Foucs={Foucs.toString()}
         />
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
input:invalid[Foucs="true"] ~ span{
  border-color:red !important ;
}
input:invalid[Foucs="true"] ~ span{
  border-color:red ;
  display: block;
}
span{
  color: red;
  display: none;
}

` 

export default Input