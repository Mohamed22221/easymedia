import React from 'react'
import styled from 'styled-components'
import Join from '../../img/JoinTeam.png'
const HeaderCareer = () => {
  return (
    <HeaderCarrierStyle>
        <div className='main-apout' data-aos="fade-down">
        <div className='left-apout'>
       <img src={Join} />
        </div>
            <div className='right-apout'>
            <p>
            We’re always looking for great talent. 
If you know what you’re
 doing and love doing it, check out our open
 positions and apply today!</p>
            </div>
        </div>
    </HeaderCarrierStyle>
  )
}
const HeaderCarrierStyle = styled.div`
padding: 4rem;

@media (max-width:500px) {
    padding: 4rem 2rem;   
}
.main-apout{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-apout{
        width: 50%;
        p{
           color :var(--font) ;
           opacity: 0.8;
        }
    }
    @media (max-width:800px) {
        flex-direction: column;
        .right-apout{
        width: 100%;
        padding: 20px 0;
    }
    }
}
`
export default HeaderCareer