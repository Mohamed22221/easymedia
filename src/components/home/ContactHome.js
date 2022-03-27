import React from 'react'
import styled from 'styled-components'
import contactsvg from"../../img/cvgcontact.svg"
import PigTitlePage from '../glopal/PigTitlePage'
const ContactHome = () => {
  return (
    <ContactStyle id='Contact'>
               
        <div className='img'>
        <PigTitlePage title="Contact"
            h1="white"
            spanprimary="white"/>
         <form  >
            <div className='one-input' data-aos="fade-down">
                <label>Your Name</label>
                <input type="text" placeholder="Please write your name here" />
            </div>
            <div className='one-input' data-aos="fade-down">
                <label>Your E-mail</label>
                <input type="text" placeholder="Please write your email here" />
            </div>
            <div className='one-input end' data-aos="fade-down">
                <label>Your Message</label>
                <input type="text" placeholder="Please write your Message here" />
            </div>
            <div className='button' data-aos="fade-down">
               <button>Send Message</button> 
            </div>
            
         </form>   
        </div>
 

    
    </ContactStyle>
  )
}
const ContactStyle = styled.div`
 overflow: hidden;
 position: relative;



 .img{
     position: relative;
    background-image: url(${contactsvg} );
    background-size:cover;
     background-repeat: no-repeat;
    height:1100px ;
    width: 100%;
    
    .main-title{
     position: absolute;
     top:  230px;

     @media (max-width:890px) {
top: 170px;
    }
 }
 form{
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);

     .one-input{

         display: flex;
         flex-direction:column;
         padding:7px ;

         label{
             color: white;
             font-size: 28px;
             position: relative;
             &::after{
                 content: "";
                position: absolute;
                bottom: -5px;
                width: 62px;
                height: 2px;
                background-color: white;
                left: 0;
             }
         }
         
         input{
             all: unset;
             border-bottom:1px solid white ;
             width: 340px;
             padding: 10px 20px;
             background-color: #ffffff0a;
             @media (max-width:440px) {
                width: 280px;
             }
             &::placeholder{
                 color: white;
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
        background-color: white;
        color: var(--primary-color);
        border-radius: 40px;
        margin: 5px 0;
        transition:all 0.5s;
        border:1px solid white;
    }
    button:hover{
        background-color: var(--primary-color);
        color: white;
        border:1px solid black;
    }
 }
 }

`

export default ContactHome