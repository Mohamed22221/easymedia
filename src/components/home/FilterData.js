import React from 'react'
import styled from 'styled-components'
import LinkIcon from '@mui/icons-material/Link';
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
               <a href={item.link} target="_blank"><LinkIcon className="LinkIcon" /></a>
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
        padding: 60px 30px 30px;

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
padding: 0px 0;
box-shadow: -1px 5px 18px -7px rgba(46,46,46,0.82);
-webkit-box-shadow: -1px 5px 18px -7px rgba(46,46,46,0.82);
-moz-box-shadow: -1px 5px 18px -7px rgba(46,46,46,0.82);
  border-radius: 10px;
 h2{
    transition: 0.5s;
    color: white;
     font-size: 20px;
     
     padding: 10px;
     background-color: var(--primary-color);
     
 }
p , a{
  opacity: 0;
  transition: 0.3s;
  font-weight: bold;
  font-size: 22px;
}
a{
  width: 80px;
  .LinkIcon{
    font-size: 50px;
    color:white
  }
}
 &:hover{
    background-color :#cb1e0087 ;
    p , a{
  opacity: 1;
  transform: translateY(70px);
  }
  
}

}
}

`
export default FilterData