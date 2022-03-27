import React from 'react'
import styled from 'styled-components'
const FilterData = ({menueItems}) => {
    const DataFilter = menueItems.map((item)=>{
        return (
            <div className='card' data-aos="flip-right" key={item.id}>
                <div className='img'>
                <img src={item.img} />
               </div>
               <div className='apout'>
               <h2 className="card-title">{item.name}</h2>
               <p>{item.discription}</p>
               <a>{item.icon}</a>
               </div>


            </div>

            )
    })
  return (
    <StyleFilter>
        <div className='main-data'>
          {DataFilter}  
        </div>
    </StyleFilter>
  )
}
const StyleFilter = styled.div`

.main-data{
    .card{
        position: relative;
        width: 270px;
        height: 250px;
        &:hover img{
          transform:scale(1.1) ;
          overflow: hidden;
        }
        &:hover h2{
          transform:scale(1.2) ;
          color: white;
          
        }
    
    }
    margin: 0 auto;
  padding:3rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
@media (max-width:500px) {
    padding:3rem 2.5rem;
} 
.img{
    position: relative;
    transition: 0.5;
    overflow: hidden;
    img{
        transition: 1s;
        width: 270px;
        height: 245px;
        border: 0px solid;
        border-radius: 7px;
        

    }
}
.apout{
 position: absolute;
 right: 0;
 top: 0;
 z-index: 15px;
 width: 100%;
 height: 100%;
 color: white;
 padding: 147px 0 0 0;
 text-align: center;
 transition:all 0.5s;
 cursor: pointer;
 h2{
    transition: 0.5s;
    font-weight: 300px;
     font-size: 30px;
     color: var(--primary-color);
 }
p{
   
    opacity: 0.7;
}
 &:hover{
    background-color :#e5351663 ;
    padding: 80px 0 0 0;
    color: white;

 }
 
}


}

`
export default FilterData