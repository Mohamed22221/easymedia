import React, { useState } from 'react'
import styled from 'styled-components'
import PutPortfolio from '../glopal/PutPortfolio.js'
import SmTitlePage from '../glopal/SmTitlePage'
import FilterData from './FilterData.js'
import DataProject from '../dataportfolio/DataProject.js'
const Portfolio = () => {
const [menueItems , setMenue] = useState(DataProject)

const Filter = (button)=>{
  if(button === "All"){
    setMenue(DataProject)
    return;
  }
const FillterData = DataProject.filter( item=> item.type === button)
setMenue(FillterData)
} 

  return (
    <PortfolioStyle id='Portfolio'>
        <SmTitlePage title="Portfolio"/>
        <div className='main-Portfolio'>
          <div className='title-portfolio' data-aos="fade-down">
          <h1>Selected works</h1>
          <p>We present to you some of our projects</p>
          </div>
          <PutPortfolio  Filter={Filter} />
          <FilterData menueItems={menueItems}/>

        </div>
    </PortfolioStyle>
  )
}
const PortfolioStyle = styled.div`
.title-portfolio{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  h1{
    padding: 10px 0;
    color: black;
  }
  p{
    width: 490px;
    text-align: center;
    padding: 10px;
    color: #545454;
    font-size: 14px;
    @media (max-width:520px) {
      width:100%
    }
  }
}
`
export default Portfolio