import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import post from "../../img/post-bg.png"
import PigTitlePage from '../glopal/PigTitlePage'
import hero from "../../img/hero-1-bg.png"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
const ContactHome = () => {
    return (

        <ContactStyle id='Contact' >
            <div className='img' >
                <Container maxWidth="lg">
                    <PigTitlePage title="Contact" h1="black" spanprimary="var(--primary-color)" />
                    <div className='main-contact'>
                    
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
                        
                        <div className='about-Contact'>
                            <h2>contact details</h2>
                            <p>Start working with <span>Easy Media</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <div className='item-contact'>
                                <div className='icon-item-contact'>
                                    <AddLocationIcon />
                                    <h4>Location</h4>

                                </div>
                                <div className='data-item-contact'>
                                    <a href='https://www.google.com/search?q=easymedia.agency&rlz=1C1BNSD_enKW969KW969&sxsrf=APq-WBv-4tg1tdu9mJyJcXGkuuHLnNMfOw:1650241798316&ei=p69cYtibD8nBgQa31Y6wDQ&oq=easy&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzIGCCMQJxATMgcILhDUAhBDMgoILhDHARDRAxBDMgoILhDHARDRAxBDMgQIABBDMgQILhBDMgQIABBDMgUIABCABDoHCCMQsAMQJzoHCAAQRxCwAzoHCAAQsAMQQzoOCC4QgAQQsQMQxwEQ0QM6DgguEIAEELEDEMcBEKMCOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6CwguEIAEELEDENQCOgUILhCABDoKCC4QsQMQ1AIQQzoLCC4QxwEQ0QMQywE6BQgAEMsBOgQIABAeOgcIIxDqAhAnOg0ILhDHARCvARDqAhAnOggILhCABBCxAzoFCAAQsQM6CAgAELEDEIMBOggIABCABBCxAzoICC4QgAQQ1AI6CggAELEDEIMBEENKBAhBGABKBAhGGABQ7glYgz5g70ZoC3ABeACAAaMCiAH6GJIBBDItMTKYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=2705044429460152125&lqi=ChBlYXN5bWVkaWEuYWdlbmN5WhIiEGVhc3ltZWRpYSBhZ2VuY3mSARBtYXJrZXRpbmdfYWdlbmN5&ved=2ahUKEwiznbrhrZz3AhVs_bsIHVOZBnUQvS56BAgREAE&sa=X&rlst=f#rlfi=hd:;si:2705044429460152125,l,ChBlYXN5bWVkaWEuYWdlbmN5WhIiEGVhc3ltZWRpYSBhZ2VuY3mSARBtYXJrZXRpbmdfYWdlbmN5;mv:[[29.634084417525198,48.60180323463209],[29.243000675189805,47.90142481666334]]' target="_blank">Kuwait : Fahad Al-Salem street <span></span> </a>
                                    <a href='https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%AD%D9%85%D8%AF%D8%A7%D9%86+%D8%A8%D9%86+%D8%B1%D8%A7%D8%B4%D8%AF+%D8%A2%D9%84+%D9%85%D9%83%D8%AA%D9%88%D9%85+%D9%84%D9%84%D9%85%D9%88%D9%87%D8%A8%D8%A9+%D9%88%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D9%83%D8%A7%D8%B1%E2%80%AD/@25.2184219,55.2705717,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f425f0f73a993:0x7f54c67bf775f6b3!8m2!3d25.2183939!4d55.2684297' target="_blank">Dubai : Hamdan Bin Rashid Al Maktoum <span> </span>  </a>
                                    <a href='#'>Egypt : ismailia</a>
                                </div>
                            </div>
                            <div className='item-contact'>
                                <div className='icon-item-contact'>
                                    <PhoneIcon />
                                    <h4>Phone</h4>

                                </div>
                                <div className='data-item-contact'>
                                    <a href='tel:+965 2220 9570'>+965 2220 9570</a>
                                    <a href='tel:+965 5537 2333'>+965 5537 2333</a>
                                    <a href='tel:+971 54 233 3232'>+971 54 233 3232</a>
                                </div>
                            </div>
                            <div className='item-contact'>
                                <div className='icon-item-contact'>
                                    <EmailIcon />
                                    <h4>Email</h4>
                                </div>
                                <div className='data-item-contact'>
                                    <a href='mailto:info@easymedia.agency'>info@easymedia.agency</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>



        </ContactStyle>

    )
}
const ContactStyle = styled.div`
 overflow: hidden;
 position: relative;
 height: 100%;
 //bg img
 &::after{
    position: absolute;
    content: url(${hero});
    width: 100%;
    top: 0;
    z-index: -1;
    height: 100%;
 }
 //main contact
 .main-contact{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 130px 0;
    @media (max-width:768px) {
        flex-wrap: wrap-reverse;
    }
   .about-Contact{
    h2{
        margin: 10px 0;
    }
    p{
        
        padding: 10px 0;
        color: var(--font);
        span{
            color: var(--primary-color);
            font-weight: bold;
        }
    }
    .item-contact{
        display: flex;
        align-items: center;
        box-shadow: 0 3px 20px 0 rgb(0 0 0 / 5%);
        margin: 20px 0;
        background-color: white;

        
        .icon-item-contact{
            
            background-color: var(--primary-color);
            width: 80px;
            color: white;
            text-align: center;
            padding: 22px 0;
            width: 20%;
            height: 100%;
            border-radius: 6px 0px 0 6px;
            h4{
                @media (max-width:760px) {
                font-size: 14px;
    }
            }
        }
        .data-item-contact{
            margin: 0 10px;
            display: flex;
            flex-direction: column;
            border-radius: 0px 6px 6px 0px;
            a{
                padding: 3px;
                color: black;
                font-size: 14px;
                @media (max-width:760px) {
                font-size: 13px;
    }
            }
        }
    }
   }
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
     z-index: 1;
     
        box-shadow: 0 3px 20px 0 rgb(0 0 0 / 5%);
       border-radius: 6px;
        background-color: white;
     padding: 20px;
     width: 100%;
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
             width: 100%;
             padding: 10px 0px;
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
        @media (max-width:560px) {
        padding:15px 30px;
    }
    }

 }
 }

`

export default ContactHome