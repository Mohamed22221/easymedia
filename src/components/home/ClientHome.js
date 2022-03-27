import React from 'react'
import styled from 'styled-components'
import Slide from '../glopal/Slide'
import SmTitlePage from '../glopal/SmTitlePage'

const ClientHome = () => {
  return (
    <ClientStyle id='Client'>
        <SmTitlePage title="Clients"/>
        <div className='paragraph'>
            <p data-aos="fade-right">lorem lorem loreml orem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </div>
        <Slide/>
    </ClientStyle>
  )
}
const ClientStyle = styled.div`
.paragraph{
 padding:0 4rem;
 color: #545454;
 font-size: 14px;
 @media (max-width:500px) {
    padding:0 2rem; 
 }
 
}


`
export default ClientHome