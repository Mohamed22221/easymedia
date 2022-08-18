import React from 'react'
import styled from 'styled-components'
import SmTitlePage from '../glopal/SmTitlePage'
import svg from "../../img/svg.svg"
import svg1 from "../../img/svg1.svg"
import svg2 from "../../img/svg2.svg"
import svg3 from "../../img/svg3.svg"
import svg4 from "../../img/svg4.svg"
import svg5 from "../../img/svg5.svg"
import { Container } from '@mui/material'





const Servcises = ({ title }) => {

    return (
        <Container maxWidth="lg" >
            <ServciesStyle id='Services' data-aos="fade-right">
                <SmTitlePage title="Services" />
                <div className='main-servces'>
                    <div className='item-servces' >
                        <img src={svg} alt="photo" />
                        <h3>Social media</h3>
                        <p>Building a social media presence is very
                            important for any business as it is a direct link
                            with the user base. Create a big user traffic on all
                            platforms with static ads, dynamic product ads
                            and much more</p>
                        <button>READ MORE</button>
                    </div>
                    <div className='item-servces' >
                        <img src={svg1} alt="photo" />
                        <h3>Branding design</h3>
                        <p>Branding is a system that makes you recognizable
                            through all the mediums, mainly consisting of a
                            name, logo, visual identity and digital product
                            design.</p>
                        <button>READ MORE</button>
                    </div>
                    <div className='item-servces' >
                        <img src={svg2} alt="photo" />
                        <h3>Advertising</h3>
                        <p>Advertising is a wingman to your company. Grab
                            attention with attractive and descriptive ads,
                            that leaves a mark in the viewers head</p>
                        <button>Read More</button>
                    </div>
                    <div className='item-servces' >
                        <img src={svg3} alt="photo" />
                        <h3>Photography</h3>
                        <p>Photography is all about expressing without
                            speaking. Have photos taken professionally to
                            better visually describe your products without
                            saying a word.</p>
                        <button>READ MORE</button>
                    </div>
                    <div className='item-servces' >
                        <img src={svg4} alt="photo" />
                        <h3>Development</h3>
                        <p>We work on developing our services
                            continuously from time to time and adapt our
                            marketing platform to keep pace with all
                            developments and circumstances</p>
                        <button>READ MORE</button>
                    </div>
                    <div className='item-servces' >
                        <img src={svg5} alt="photo" />
                        <h3>E-service</h3>
                        <p>{"Building yourself an E-Store and taking your business online completely changes thedynamics of your business as it introduces newmarkets for you to conquer".substring(0, 80)}...</p>
                        <button >READ MORE</button>
                    </div>
                </div>
            </ServciesStyle>
        </Container>
    )
}
const ServciesStyle = styled.div`

.main-servces{
    gap: 70px 70px  ;
    display: grid;
    padding: 3rem 0rem;
    grid-template-columns: repeat( auto-fit, minmax(280px, 1fr) );
    

.item-servces{
    box-shadow: 0 3px 20px 0 rgb(0 0 0 / 5%);
    padding-top: 40px;
    padding: 40px 40px 10px 40px;
    max-height: 430px;
    border: 1px solid #eff2f7;
    border-radius: 1rem;
    transition: 0.3s;
    
    &:hover {
    background:#d3200030;
    transform: translateY(-15px);
    }

    h3{
    font-size: 30px;
    font-weight: 500;
    padding: 5px 0;
    position: relative;
    &::before{
    content: "";
     position: absolute;
    left: -10px;
    top: -100px;
    border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
    height: 100px;
    width: 100px;
    background: linear-gradient(to top right, transparent 0%, var(--primary-color) 100%);
    opacity: 0.15;
    z-index: 1;
    }

    }
    p{
        padding: 15px 0;
        color: var(--font);

    }
    button{
        all: unset;
        cursor: pointer;
        padding: 10px 20px;
        border:1px solid black;
        border-radius: 40px;
        margin: 4px 0;
        transition:all 0.5s;
    }
    button:hover{
        background-color: var(--primary-color);
        color: white;
        border:1px solid white;
    }
}

}

`
export default Servcises