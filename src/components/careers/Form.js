import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Input from './Input'
const Form = () => {
  return (
    <StyleMainForm>
        <Container maxWidth="lg">
            <div className='apout'>
                <h1>Welcome</h1>
                <p>We’re always looking for great talent. If you know what you’re doing and love doing it, check out our open positions and apply today!</p>
            </div>
            
        <StyleForm>
            
        <div className='item-input'>
        <Input 
        name="First Name" 
        placeholder="Type your first name"
        type="text"
        />
        <Input 
        name="Last Name" 
        placeholder="Type your last name"
        type="text"
        />
        </div>
        <div className='item-input'>
        <Input 
        name="Email Address" 
        placeholder="Type your Email"
        type="email"
        />
        <Input 
        name="Mobile Number" 
        placeholder="Type your Phone"
        type="text"/> 
        </div>

        
        </StyleForm>
        </Container>
    </StyleMainForm>
  )
}
const StyleMainForm = styled.div`
.apout{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
    padding:20px 0 ;
    color: var(--primary-color);
    font-size: 39px;
    }
    p{
    padding:20px 0 ;
    width: 70% ;
    text-align: center;
    color: #8b8b8b;
    
    }
    @media (max-width:780px) {
    p{
        width: 90%;
    }
    }

}
` 
const StyleForm = styled.form`
display: flex;
justify-content: center;
@media (max-width:780px) {
      flex-direction:column ;
      align-items: center;
    }

` 
export default Form