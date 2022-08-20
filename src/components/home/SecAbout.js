import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import PigTitlePage from '../glopal/PigTitlePage'
import apoutimg from '../../img/02.png'


const SecAbout = () => {
  return (
    <Container maxWidth="lg">
     <MainAbout>
      <div className='left-about'>
        <PigTitlePage title="About" h1="var(--background-dark-color)" spanprimary="var(--primary-color)"/>
        <p data-aos="fade-right" >Easy Media is a Marketing Company based in Kuwait. In today’s day and age, marketing is very in- tegral to any company that aims for success. Our Job is to assist the companies in their marketing journey, making it fruitful and successful. Our target market is very much dependent on our cli- ents, target market, as we shape each and every plan carefully for our clients, needs to best serve their interests. We enable our clients to reach their goals by removing the barriers in their way that stop them from reaching their potential...</p>
        <button>Know More</button>
      </div>
      <div className='right-about'>
        <div className='main-img'>
          <img src={apoutimg} className="apout-img" />
        </div>
      </div>
        
     </MainAbout>
     </Container>
  )
}
const MainAbout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
margin: 10px 0 0px 0;
@media (max-width:1250px) {
      overflow: hidden;
    }
//left
.left-about{
  p{
    padding: 30px 0;
    width: 600px;
    color: var(--font);
    line-height: 34px;
    @media (max-width:800px) {
    width: 100% ;

    }
  }
  button{
    all: unset;
    background-color: var(--primary-color);
    color: white;
    align-items: flex-start;
    padding: 10px 40px;
    border-radius:40px ;
    cursor: pointer;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
    font-weight: bold;
    transition: 0.4s;
    &:hover{
      transform: translateY(-5px);
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.4);
    }

  }
}
//right
.right-about{
  position: relative;
  @media (max-width:500px) {
    margin-top: 40px;
    }
  &::before{
    content: "";
    position: absolute;
    right: -140px;
    top: 0px;
    border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
    height: 500px;
    width: 500px;
    background: linear-gradient(to top right, transparent 0%, var(--primary-color) 100%);
    opacity: 0.5;
    z-index: 1;
    @media (max-width:1250px) {
      right: -60px;
      overflow: hidden;
    }
    @media (max-width:500px) {
      right: -100px;
      overflow: hidden;
      width: 400px;
      height: 400px;
    }

    }

  .main-img{
    
    .apout-img{
     position: relative;

    width: 250px;
    z-index: 2;
    animation:MoveUpDown 3s linear infinite ;

    @media (max-width:500px) {
    width: 190px ;
    margin-left: 80px;
    }
  }
  }

}
`
export default SecAbout