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
position: relative;

    
    h1{
        font-size: 32px;
        color: var(--background-dark-color);
        
    }
    h1::first-letter{
        font-size: 34px; 

    }


    h1::before{
        content: "";
        position: absolute;
        bottom: -9px;
        background-color: var(--primary-color);
        width: 60px;
        height: 2px;
    }
    span{
        color: var(--primary-color);
    }
`

export default SmTitlePage