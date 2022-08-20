import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import post from "../../img/post-bg.png"
import PigTitlePage from '../glopal/PigTitlePage'
import hero from "../../img/hero-1-bg.png"
const ContactHome = () => {
    return (
        
        <ContactStyle id='Contact' >
            <div className='img' >
            <Container maxWidth="lg">
                <PigTitlePage title="Contact" h1="black" spanprimary="var(--primary-color)"/>
                <form >
                    <div className='one-input' >
                        <label>Your Name</label>
                        <input type="text" placeholder="Please write your name here" />
                    </div>
                    <div className='one-input' >
                        <label>Your E-mail</label>
                        <input type="text" placeholder="Please write your email here" />
                    </div>
                    <div className='one-input' >
                        <label>Your Phone</label>
                        <input type="text" placeholder="Please write your number here" />
                    </div>
                    <div className='one-input end' >
                        <label>Your Message</label>
                        <input type="text" placeholder="Please write your Message here" />
                    </div>
                    <div className='button' >
                        <button>Send Message</button>
                    </div>

                </form>
                </Container>
            </div>

       

        </ContactStyle>
        
    )
}
const ContactStyle = styled.div`
 overflow: hidden;
 position: relative;
 height: 700px;
 &::after{
    position: absolute;
    content: url(${hero});
    width: 100%;
    top: 0;
    z-index: 0;
 }
 


 .img{
    background-image: url(${post});
    background-size:cover;
    background-repeat: no-repeat;
   
    height:100%;
    
    
    .main-title{
     position: absolute;
     top:  0px;
     @media (max-width:890px) {
        top: 0px;
    }
 }
 form{
     position: absolute;
     z-index: 1;
     top: 65%;
     left: 50%;
     transform: translate(-50%,-70%);
    @media (max-width : 780px) {
        top: 50%;
        transform: translate(-50%,-50%);
    }
     .one-input{

         display: flex;
         flex-direction:column;
         padding:7px ;

         label{
             color: black;
             font-size: 28px;
             position: relative;
             &::after{
                 content: "";
                position: absolute;
                bottom: -5px;
                width: 62px;
                height: 2px;
                background-color: var(--primary-color);
                left: 0;
             }
         }
         
         input{
             all: unset;
             border-bottom:1px solid var(--primary-color) ;
             width: 340px;
             padding: 10px 20px;
             background-color: #ffffff0a;
             @media (max-width:440px) {
                width: 280px;
             }
             &::placeholder{
                 color: black;
                 font-size: 13px;
                 opacity: 0.5;
             }

         }


     }
     .one-input.end input{
        height: 60px;

    }

 }
 .button{
     display: flex;
     align-items: center;
     justify-content: center;
    button{
        all: unset;
        cursor: pointer;
        padding: 15px 100px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 40px;
        margin: 5px 0;
        border:1px solid white;
    }

 }
 }

`

export default ContactHome