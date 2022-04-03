import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const FotterHome = () => {
  return (
    <FotterStyle >
        <div className='main-fotter' >
        <div className='item-fotter' data-aos="fade-down">
            <h2>Lorem</h2>
            <p><a href='#'>lorem ispam</a></p>
            <p><a href='#'>lorem ispam</a></p>
            <p><a href='#'>lorem ispam</a></p>
            <p><a href='#'>lorem ispam</a></p>
        </div>
        <div className='item-fotter' data-aos="fade-down">
            <h2>Lorem</h2>
            <p><a href='#'>lorem ispam</a></p>
            <p><a href='#'>lorem ispam</a></p>
            <p><a href='#'>lorem ispam</a></p>
            <p><a href='#'>lorem ispam</a></p>
        </div>
        <div className='item-fotter' data-aos="fade-down">
            <h2>Social media</h2>
            <a href='#'><FacebookIcon className='icon' /></a>
            <a href='#'><InstagramIcon className='icon' /></a>
            <a href='#'><TwitterIcon className='icon' /></a>
            <a href='#'><LinkedInIcon className='icon'/></a>
        </div>
        </div>
        <div className='copy-right' data-aos="fade-down">
        <h2>Copyright<span><CopyrightIcon className='copy'/></span></h2>
        </div>
       

        
        
    </FotterStyle>
  )
}
const FotterStyle = styled.div`
    background-color: var(--primary-color);
    padding: 40px 4rem;
    @media (max-width:500px) {
    padding: 40px 2rem;    
    }
    .main-fotter{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width:500px) {
        justify-content: center;   
    }
    .item-fotter{
        
        padding: 15px;
        display: flex;
        flex-direction: column;
        &:last-child{
            display: block;
            flex-direction: row; 
        }
        h2{
            font-weight: 400;
            font-size: 30px;
            color: white;
            text-transform: uppercase;
            padding: 8px 0;
        }
        a{
            color: white;
            opacity: 0.8;
            cursor: pointer;
        }
        .icon{
            color: white !important;
            opacity: 1 !important;
            margin: 10px;
            font-size: 29px;
            
        }
    }
    }
    .copy-right{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 2px;
        padding: 80px 0 40px;
        h2{
            padding-right: 18px;
            position: relative;
            span .copy{
            position: absolute;
            top: 2px;
            margin-left: 4px;
        }
        &::after{
            position: absolute;
            
            content: "";
            top: -50px;
            width: 250px;
            height: 1px;
            color: white;
            background-color: white;
            left: 44%;
            transform: translate(-46%);
        }
        }

    }
    

`
export default FotterHome