import React from 'react'
import styled from 'styled-components'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

import { HashLink as Link, NavHashLink } from 'react-router-hash-link';
import Logo from "../../img/logo.png"

import { Container } from '@mui/material';



const FotterHome = () => {
    return (

        <FotterStyle >
            <div class="custom-shape-divider-top-1661081115">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <Container>
                <div className='main-fotter' >
                    <div className='about-fotter'>
                        <div className='item-fotter'>
                            <img src={Logo} />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
                            <div className='item-social' >
                                
                                <a href='https://www.facebook.com/easymedia.agency' target="_blank"><FaFacebookSquare /></a>
                                <a href='https://www.instagram.com/easymedia_agency/' target="_blank"><FaInstagramSquare /></a>
                                <a href='https://www.linkedin.com/company/easy-media-agency/mycompany/?viewAsMember=true' target="_blank"><FaLinkedin /></a>
                                <a href='https://wa.me/0096555372333' target="_blank"><FaWhatsappSquare /></a>
                            </div>
                        </div>
                        <div className='item-fotter links'>
                            <h3>Useful Links</h3>
                            <Link  to="/easymedia#About" >About us<BsArrowRightShort /></Link>
                            <Link  to="/easymedia#Services" > Services<BsArrowRightShort /></Link>
                            <Link  to="/easymedia#Contact" >Contact<BsArrowRightShort /></Link>
                            <Link  to="/easymedia#Portfolio" > Portfolio<BsArrowRightShort /></Link>
                            <Link  to="/easymedia#Client" >Client<BsArrowRightShort /></Link>
                        </div>
                        <div className='item-fotter links'>
                            <h3>Other Links</h3>
                             <Link  to="/Careers" > Careers<BsArrowRightShort /> </Link>
                             <Link  to="/subscribe" >Subscribe<BsArrowRightShort /></Link>
                             <Link  to="/terms" >Terms<BsArrowRightShort /></Link>

                        </div>

                    </div>
                    <div className='copy-right' >
                        <span>© Copyrights 2020 axsis All rights reserved.</span>
                        <Link to="/terms"><p>Terms and Conditions</p></Link>
                    </div>
                </div>
            </Container>
        </FotterStyle>

    )
}
const FotterStyle = styled.div`
   
    padding: 5px 0rem;
    background:var(--primary-color);
    height:450px;
    position: relative;
    z-index: 4;
    @media (max-width:630px) {
        height: 100%;
    }
    .custom-shape-divider-top-1661081115 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1661081115 svg {
    position: relative;
    display: block;
    width: calc(110% + 1.3px);
    height: 186px;
}

.custom-shape-divider-top-1661081115 .shape-fill {
    fill: #FFFFFF;
}
.main-fotter{
    .about-fotter{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 150px;
         color: #e4c7c7;
         @media (max-width:630px) {
        flex-direction: column;
        }
        .item-fotter{
            img{
                width: 180px;
               
            }
            p{
                width: 290px;
                font-size: 14px;
                padding: 10px 0;
            }
            svg{
                margin: 10px 4px;
                font-size: 35px;
                color: white;
                transition: 0.4s;
                &:hover{
                    transform: translateY(-8px);
                }
            }
        }
        .links{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            h3{
                margin: 10px 0;
                color: white;
            }
            a{
                margin: 4px 0;
                color: #e4c7c7;
                display: flex;
                align-items: center;
                svg{
                    font-size: 15px;
                    margin: 0 4px;
                }
                &:hover{
                    color: white;
                }
            }
        }
    }

    .copy-right{
        padding: 20px 0;
        border-top:1px solid #e4c7c7 ;
        display: flex;
        justify-content: space-between;
        span , a{
            font-size: 14px;
            color: #e4c7c7;
            cursor: pointer;
        }
    }
}

`
export default FotterHome