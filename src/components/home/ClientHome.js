import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Slide from '../glopal/Slide'
import SmTitlePage from '../glopal/SmTitlePage'

const ClientHome = () => {
  return (
    <Container maxWidth="lg">
    <ClientStyle id='Client'>
        <SmTitlePage title="Clients"/>
        <div className='paragraph'>
            <p data-aos="fade-right">From 2020 tell now we Has been learning and innovation for Easy Media , We Have been Working on
            Recruiting Greater Team Mates & Executing Bigger Projects Building a name for Affordable And Reliable Services</p>
        </div>
        <Slide/>
    </ClientStyle>
    </Container>
  )
}
const ClientStyle = styled.div`
.paragraph{
 padding:0 0rem;
 color: #545454;
 font-size: 14px;
 width: 50%;
 @media (max-width:500px) {
    width: 100%;

 }
 @media (max-width:1100px) {
    
    width: 100%;
 }
 
}


`
export default ClientHome