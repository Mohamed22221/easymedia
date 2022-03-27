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
            Working in an agency requires adapting to a certain lifestyle not found anywhere else, which made us create a working environment that is fun, friendly, and creative. If Ghaliah seems like the place for you, and you think you have what it takes, this is where you can apply!</p>
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