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
import { useState } from 'react'
import OneServes from './OneServes'



const Servcises = () => {
    const [showString, setShowString] = useState(true)
    const DataServices = [
        {
            id: 1,
            title: "Social media",
            des: "Building a social media presence is very important for any business as it is a direct link with the user base. Create a big user traffic on all platforms with static ads, dynamic product ads and much more",
            img: svg
        },
        {
            id: 2,
            title: "Branding design",
            des: "Branding is a system that makes you recognizable through all the mediums, mainly consisting of a name, logo, visual identity and digital product design.",
            img: svg1
        },
        {
            id: "3",
            title: "Advertising",
            des: "Advertising is a wingman to your company. Grab attention with attractive and descriptive ads, that leaves a mark in the viewers head",
            img: svg2
        },
        {
            id: "4",
            title: "Photography",
            des: "Photography is all about expressing without speaking. Have photos taken professionally to better visually describe your products without saying a word.",
            img: svg3
        },
        {
            id: "5",
            title: "Development",
            des: "We work on developing our services continuously from time to time and adapt our marketing platform to keep pace with all developments and circumstances",
            img: svg4
        },
        {
            id: "6",
            title: "E-service",
            des: "Building yourself an E-Store and taking your business online completely changes thedynamics of your business as it introduces newmarkets for you to conquer",
            img: svg5
        },
    ]


    return (
        <MainServices>
            <Container maxWidth="lg" >
                <ServciesStyle id='Services' data-aos="fade-right">
                    <SmTitlePage title="Services" />
                    <div className='main-servces'>
                        {DataServices.map((item) => {
                            return (
                                <OneServes {...item} key={item.id} />
                            )
                        })}
                    </div>
                </ServciesStyle>
            </Container>
            <div className="wave"></div>
        </MainServices>
    )
}
const MainServices = styled.div`


`
const ServciesStyle = styled.div`
overflow: auto;
.main-servces{
    gap: 70px 70px  ;
    display: grid;
    padding: 3rem 0rem;
    grid-template-columns: repeat( auto-fit, minmax(280px, 1fr) );
    

.item-servces{
    box-shadow: 0 3px 20px 0 rgb(0 0 0 / 5%);
    padding: 40px 40px 10px 40px;
    max-height: 430px;
    border: 1px solid #eff2f7;
    border-radius: 1rem;
    transition: 0.3s;
    &:hover {
    transform: translateY(-15px);
    background-color: #e5351666;

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