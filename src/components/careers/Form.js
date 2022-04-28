
import { Container } from '@mui/material'
import emailjs from 'emailjs-com';
import React, {  useState } from 'react'
import styled from 'styled-components'
import Input from './Input'
import {  useToasts } from 'react-toast-notifications'




const Form = ({content }) => {
    
    const { addToast } = useToasts();
     // take values onchange inbut
    const [Values , setValues] = useState({
        FirstName : "" ,
        LastName : "",
        Email :"",
        Mobile :"",
        portfolio:""
    })
     // loop inbut
    const inputs = [
     {
        id:1,
        name:"FirstName",
        placeholder:"Type your first name",
        type:"Text",
        Label:"First Name",
        required:true,
        pattern:"^[a-zA-Z]+(-[a-zA-Z]+)*$",
        error:"You must enter your First name at least 3 character and shouldn't include any special character"
        
     },
     {
        id:2,
        name:"LastName",
        placeholder:"Type your last name",
        type:"text",
        Label:"Last Name",
        pattern:"^[a-zA-Z]+(-[a-zA-Z]+)*$",
        required:true,
        error:"You must enter your First name at least 3 character and shouldn't include any special character"
     },
     {
        id:3,
        name:"Email",
        placeholder:"Type your Email",
        type:"email",
        Label:"Email",
        required:true,
        error:"Please enter a valid Email Address."
     },
     {
        id:4,
        name:"Mobile",
        placeholder:"Type your Number",
        type:"tel",
        Label:"Mobile Number",
        required:true,
        pattern:"^([0|\+[0-9]{1,5})?([0-9]{10})$" ,
        error:"Please write the international code before the number like this (+20126798122)" ,
        
     },
     {
        id:5,
        name:"JobTitle",
        placeholder:"Type your job title",
        type:"text",
        required:true,
        Label:"Job Title"
     },
     {
        id:6,
        name:"portfolio",
        placeholder:"But your Bortfolio",
        type:"text",
        Label:"portfolio website",
        required:true,
        error:"Please enter your Bortfolio"
     }
    ] 
    // take value onchange inbut
    const HandellSupmit = (e)=>{
        e.preventDefault()
        //send mail
        emailjs.sendForm("service_64nbnzd" ,"template_kh79ldg" , e.target ,"_gMMwNlImuaHyLxGu")
        .then((response) => {
            console.log(response);
            addToast('Send Successfully', { appearance: 'success' }  );
         }, (err) => {
            console.log('FAILED...', err);
         });
         
         setValues(e.target.value = "")
    }
    const ChangeValue = (e)=>{
         setValues({...Values , [e.target.name] : e.target.value})
         
         
    }
   console.log(Values)
  return (
    <StyleMainForm>
        <Container maxWidth="lg">
       
            <div className='apout'>
                <h1>Welcome</h1>
                <p>We’re always looking for great talent. If you know what you’re doing and love doing it, check out our open positions and apply today!</p>
            </div>  
        <StyleForm onSubmit={HandellSupmit}> 
       <div className='flex-input'>
           {inputs.map((item)=>{
                return (
               <Input key={item.id} {...item} value={Values[item.name]} ChangeValue={ChangeValue}  />
               
                )
           })}
        </div>  
        <div className='button'>
          <button onClick={ChangeValue}>Join Now</button>    
        </div>
        </StyleForm>
        
        </Container>
    </StyleMainForm>
  )
}
const StyleMainForm = styled.div`
padding-bottom: 80px;

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
position: relative;
.flex-input{
     display: grid;
grid-template-columns: repeat( auto-fit, minmax(50%, 1fr) ); 
justify-content: center;
@media (max-width:780px) {
grid-template-columns: repeat( auto-fit, minmax(100%, 1fr) );
 
}
}
.input-file{
input {
    border: 2px dashed #A7A7A7;
    height: 80px;
    padding: 30px;
}
}
.button{
display: flex;
justify-content: flex-end;
margin-right: 20px;
button{
        all: unset;
        cursor: pointer;
        padding: 10px 30px;
        border:1px solid black;
        border-radius: 10px;
        margin: 4px 0;
        transition:all 0.5s;
    }
    button:hover{
        background-color: var(--primary-color);
        color: white;
        border:1px solid white;
    }
}



` 
export default Form