import React from 'react'
import DataCarerr from './DataCareer'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import pallBackground from"../../img/Moon.svg"
import Form from './Form';

const JobId = () => {
    const params = useParams() 
    const PramId = `${params.jopId}`
    
  return (
   <StyleMainJopId> 
    <StyleJopId>
        {DataCarerr.filter((item)=>item.name === PramId ).map((item)=>{
            return (
            <div className='apout-jop' key={item.id}  >
                <h4 data-aos="fade-down">Who are we looking for?</h4>
               <h1 data-aos="fade-down">{item.name}</h1>
               <p data-aos="fade-up">{item.role}</p>
               <button data-aos="fade-up">Apply for {item.name} </button>
           </div>    
            )})
        }
    </StyleJopId>
    <Form />
    </StyleMainJopId>  

  )
}
const StyleMainJopId = styled.div`
` 
const StyleJopId = styled.div`
background-image: url(${pallBackground});
background-repeat: no-repeat;
background-size: cover;
height: 600px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;

.apout-jop{
    margin: 10px;
position: absolute;
top: 10%;
text-align: center;
color: white;
h1{
    padding: 20px 0;
    font-size: 50px;
}
p{
    width: 900px;
}
button{
    all: unset;
    color: var(--primary-color);
    background-color: white;
    border-radius: 40px;
    margin: 40px 10px;
    padding: 15px 25px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: 0.7s;
    &:hover{
     transform:translateY(-10%) ;
    }
}
@media (max-width:950px ) {
    p{
    width:100%;
}
}
@media (max-width:600px ) {
top: 5%;
padding: 20px 0;
h1{
    
    font-size: 26px;
}
p{
    width:100%;
}
button{
    font-size:14px
}
}
}
` 
export default JobId