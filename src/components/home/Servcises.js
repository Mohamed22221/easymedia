import React from 'react'
import styled from 'styled-components'
import SmTitlePage from '../glopal/SmTitlePage'
import svg from "../../img/svg.svg"
import svg1 from "../../img/svg1.svg"
import svg2 from "../../img/svg2.svg"
import svg3 from "../../img/svg3.svg"
import svg4 from "../../img/svg4.svg"
import svg5 from "../../img/svg5.svg"





const Servcises = ({title}) => {
  return (
    <ServciesStyle id='Services'>
        <SmTitlePage title="Services" />
        <div className='main-servces'>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg}/>
                <h3>Social media</h3>
                <p>Building a social media presence is very
important for any business as it is a direct link
with the user base. Create a big user traffic on all
platforms with static ads, dynamic product ads
and much more</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg1}/>
                <h3>Branding design</h3>
                <p>Branding is a system that makes you recognizable
through all the mediums, mainly consisting of a
name, logo, visual identity and digital product
design.</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg2}/>
                <h3>Advertising</h3>
                <p>Advertising is a wingman to your company. Grab
attention with attractive and descriptive ads,
that leaves a mark in the viewers head</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg3}/>
                <h3>Photography</h3>
                <p>Photography is all about expressing without
speaking. Have photos taken professionally to
better visually describe your products without
saying a word.</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg4}/>
                <h3>Development</h3>
                <p>We work on developing our services
continuously from time to time and adapt our
marketing platform to keep pace with all
developments and circumstances</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg5}/>
                <h3>E-service</h3>
                <p>Building yourself an E-Store and taking your
business online completely changes the
dynamics of your business as it introduces new
markets for you to conquer.</p>
                <button>READ MORE</button>
            </div>
        </div>
    </ServciesStyle>
  )
}
const ServciesStyle = styled.div`

.main-servces{
    gap: 70px 70px  ;
    display: grid;
    padding: 3rem 4rem;
    @media (max-width:2500px ) {
        grid-template-columns: repeat( auto-fit, minmax(450px, 1fr) );
    }
    @media (max-width:1700px ) {
        grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
    }
    @media (max-width:1495px ) {
        grid-template-columns: repeat( auto-fit, minmax(290px, 1fr) );
    }
    @media (max-width:1295px ) {
        grid-template-columns: repeat( auto-fit, minmax(240px, 1fr) );
    }
    @media (max-width:932px ) {
        grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    }
    @media (max-width:600px ) {
       padding: 2rem;
    }
.item-servces{
    
    h3{
        font-size: 30px;
        font-weight: 500;
        padding: 5px 0;
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