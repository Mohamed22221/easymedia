import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PigTitlePage = ({title , h1 ,spanprimary }) => {
    useEffect(()=>{
        AOS.init({
          duration:2000
        });
      },[])
  return (
    <PigStyleTitle>
       <div className='main-title' data-aos="fade-down">
       <h1 style={{color:h1}}>{title}</h1>
        <h2 >easy<span style={{color:spanprimary}}>media.</span></h2>
        </div> 
    </PigStyleTitle>
  )
}
const PigStyleTitle =styled.div`
    .main-title{
    padding:0 4rem;
    position: relative;
    @media (max-width:1000px) {
    padding: 0 2.2rem;    
    } 
    h1{
        font-size: 38px;
        
    }
    h2{
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

    
    
    }

`
export default PigTitlePage