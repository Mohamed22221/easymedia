import React from 'react'
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataCarerr from './DataCareer';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const AccordionCarrer = () => {
  return (
    <AccordionStyle>
      {DataCarerr.map((item) =>{
        return(
          <Accordion  className='accordion' key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='title'>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'div'}>
             <h4 className='condition'>{item.condition}</h4> 
             <h4 className='Seniority'>Seniority : <span>{item.Seniority}</span></h4>
             <div className='role'>
               <h3> Role</h3>
               <p>{item.role}</p>
             </div>
             <h3 >Qualifications & Experience</h3>
          {item.Experience.map((expense)=>{
            return (
             <div className='Experience' key={expense.id}>
               
                <li>
              <HorizontalRuleIcon className='horizintal'/>  {expense.about}
                </li>
             </div>
            )
          })}
          <div className='applay'>
            <button>Apply</button> 
          </div>
         

            </Typography>
          </AccordionDetails>
        </Accordion>
        )
      })

      }
       
      

      
    </AccordionStyle>
  )
}
const AccordionStyle = styled.div`
padding:2rem 4rem 5rem;
margin-bottom: 40px;
@media (max-width:500px) {
    padding: 0rem 2rem;   
}
h3{
  padding: 15px 0;
}
.role{
  p{
    color: var(--font);
  }
}

.accordion{
  padding: 10px 0;
  margin: 20px 0;
  background-color: #e53516de;
  color: white;

}
.details{
  color:white;
  background-color: #e535167a;
}
.condition{
  padding: 10px 0px;
  margin: 10px 0;
  text-align: center;
  background-color: white;
  border-radius: 300px;
  color: black;
  width: 120px;
  font-size:14px
}
.Seniority{
  margin: 10px 0;
  font-size: 20px;
  
  span{
    font-size: 17px;

    
  }
}
.Experience{
  color: var(--font);
  line-height: 40px;
  margin-left: 20px;
  position: relative;
  .horizintal{
  padding: 4px 0 0 0;
  margin-top: 4px;
  position: absolute;
  top: 2px;
  left: -24px;
  
}

}
.title{
  font-size: 19px;
}
.applay{
 margin: 10px 0;
 background-color: white;
 width: 120px;
 text-align: center;
 transition: 0.8s;

 &:hover{
      transform: translateY(-8px);

    }
  button{
   
    all: unset;
   padding: 10px 0;
     cursor:pointer;
    color: var(--primary-color);
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;


  }
}
`
export default AccordionCarrer