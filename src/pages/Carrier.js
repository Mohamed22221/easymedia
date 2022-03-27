import React from 'react'
import styled from 'styled-components'
import AccordionCarrer from '../components/careers/AccordionCarrer'
import HeaderCareer from '../components/careers/HeaderCareer'
import FotterHome from '../components/home/FotterHome'
const Carrier = () => {
  return (
    <CarrierStyle>
        <HeaderCareer/>
        <AccordionCarrer/>
        <FotterHome/>
    </CarrierStyle>
  )
}
const CarrierStyle = styled.div`
`
export default Carrier