import React from 'react'
import styled from 'styled-components'
const PigTitlePage = ({title}) => {
  return (
    <PigStyleTitle>
        <h1>{title}</h1>
        <h3>easy<span>media.</span></h3>
    </PigStyleTitle>
  )
}
const PigStyleTitle =styled.div`
    padding:0 4rem;
    position: relative;
    @media (max-width:1000px) {
    padding: 0 2.2rem;    
    }
    
    h1{
        font-size: 38px;
        color: var(--background-dark-color);
        
    }
    h3{
        color: var(--background-dark-color);
        font-size  :20px ;
    }
    h3::before{
        content: "";
        position: absolute;
        bottom: -9px;
        background-color: black;
        width: 40px;
        height: 2px;
    }
    span{
        color: var(--primary-color);
    }
`
export default PigTitlePage