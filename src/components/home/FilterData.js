import React, { useState } from 'react'
import styled from 'styled-components'
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
const FilterData = ({menueItems}) => {
  const [show , setShow] = useState(false)
  const [imgSrc , setImgSrc ] = useState("")

  const getImg = (item) =>{
    if (item.type === "Social") {
      setShow(true)
      setImgSrc(item.img)
    }else{
      return
    }
    
  }
    
        
    
  return (
    <StyleFilter>
        <div className='main-data' >
            <div className={show ? "show open" : "show"}>
              <img src={imgSrc} alt="photo" />
              <CloseIcon className='exit' onClick={()=> setShow(false) } />
            </div>
            {menueItems.map(item =>{
              return (
                <div className='card' key={item.id} data-aos="zoom-in"  onClick={()=> getImg(item)}   >
                <div className='img' >
                <img src={item.img} alt="photo" />
               </div>
               <div className='apout' about={item.type} >
               <h1 className="card-title">{item.name}</h1>
               <p>{item.discription}</p>
               <a href={item.link} target="_blank">{item.link === "" ? null : <LinkIcon className="LinkIcon" />}</a>
               </div>
              </div> 
              )
            })

            }
        </div>
        
    </StyleFilter>
  )
}
const StyleFilter = styled.div`

.main-data{
  
  .show{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2000;
    background-color: #000000d1;
    display: flex;
    transition:opacity 0.4s ease , visibility 0.4s ease-in-out , transform 0.4s ease-in-out ;
    justify-content: space-between;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    transform: scale(0);
    img{
      height: 80%;
      

    }
    @media (max-width:770px) {
      img{
        width: 90%;
        height: 50%;
      }
    }

  }
  .show.open{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .exit{
    position: absolute;
    right: 50px;
    z-index: 2001;
    font-size: 50px;
    top: 80px;
    color: white;
    cursor: pointer;
  }
    .card{
        position: relative;
        width: 260px;
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
  justify-content: space-between;
    
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
 h1{
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
    background-color : #cb1e0087     ;
    p , a{
  opacity: 1;
  transform: translateY(70px);
  }
  
}

}
}

`
export default FilterData