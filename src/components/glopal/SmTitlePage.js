import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SmTitlePage = ({title}) => {
    useEffect(()=>{
        AOS.init({
          duration:1000
        });
      },[])
  return (
    <SmStyleTitle data-aos="fade-down">
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
        background-color: var(--primary-color);
        width: 70px;
        height: 2px;
    }
    span{
        color: var(--primary-color);
    }
`

export default SmTitlePage