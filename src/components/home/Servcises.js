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
        <SmTitlePage title="Servces" />
        <div className='main-servces'>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg}/>
                <h3>Adertising</h3>
                <p>mohamed lorem loream lorem loream mohamed lorem loreammohamed </p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg1}/>
                <h3>Branding</h3>
                <p>mohamed lorem loream mohamed lorem loreammohamed lorem loream</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg2}/>
                <h3>Social Media</h3>
                <p>mohamed lorem loream mohamed lorem loreammohamed lorem loream</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg3}/>
                <h3>Creative ideas</h3>
                <p>mohamed lorem loream mohamed lorem loreammohamed lorem loream</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg4}/>
                <h3>Development</h3>
                <p>mohamed lorem loream mohamed lorem loreammohamed lorem loream</p>
                <button>READ MORE</button>
            </div>
            <div className='item-servces' data-aos="fade-right">
                <img src={svg5}/>
                <h3>Strategy</h3>
                <p>mohamed lorem loream mohamed lorem loreammohamed lorem loream</p>
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
        padding: 4px 0;
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