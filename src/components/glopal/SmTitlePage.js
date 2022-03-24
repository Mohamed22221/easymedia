import React from 'react'
import styled from 'styled-components'
const SmTitlePage = ({title}) => {
  return (
    <SmStyleTitle>
        <h1>Our <span>{title}</span></h1>
    </SmStyleTitle>
  )
}
const SmStyleTitle =styled.div`
   margin: 2rem 0;
    padding:0rem 4rem;
    position: relative;
    @media (max-width:1000px) {
    padding: 0rem 2.2rem;    
    }
    
    h1{
        font-size: 38px;
        color: var(--background-dark-color);
        
    }
    h1::first-letter{
        font-size: 45px; 

    }


    h1::before{
        content: "";
        position: absolute;
        bottom: -9px;
        background-color: black;
        width: 70px;
        height: 2px;
    }
    span{
        color: var(--primary-color);
    }
`

export default SmTitlePage