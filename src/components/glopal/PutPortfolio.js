import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const PutPortfolio = ({Filter}) => {
  const [filterActive, setFilterActive] = useState("All");
  const btnsFilter = [
    {id:1 , name: "All" , title : "All"  },
    {id:2 , name: "Software" , title : "Software Services"  },
    {id:3 , name: "Media" , title : "Media Production"  },
    {id:4 , name: "Social" , title : "Social Media"  },
    {id:5 , name: "Branding" , title : "Branding"  },


  ]
  const HandelFilter = (item) =>{
     Filter(item.name)
     setFilterActive(item.name)
  }
  return (

    <StyleButoon data-aos="fade-down">
      {btnsFilter.map(item => (
         <button onClick={() => HandelFilter(item)}  className={`${filterActive === item.name ? 'active' : ''}`} key={item.id}>
             {item.title}
         </button>
        ))
      }

        
    </StyleButoon>


  )
}
const StyleButoon = styled.div`
margin:0rem 4rem ;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media (max-width:500px ) {
  margin:0rem 2rem ;
}
button{
  all: unset;
  padding: 10px 20px;
  cursor: pointer;
  border:1px solid var(--primary-color) ;
  margin: 8px;
  border-radius: 5px;
  transition: 0.5s;
  &:hover   {
    background-color:var(--primary-color) ;
    color: white;
  }

}
.active{
  background-color:var(--primary-color) ;
    color: white;
}


    
`
export default PutPortfolio