import React ,{useState} from 'react'
import styled from 'styled-components'
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const FormData = () => {
// switch item 
const [toggle, setToggle] = useState(false)
const handleToggle = () => {
    setToggle(!toggle)
}
  
  return (
    <StyleFormData toggle={toggle}>
      {/*Project and account instagram */}
      <div className='input'>
      <label>Project Name</label>
      <input placeholder='type your project name' type="text" />
      </div>
      <div className='input'>
      <label>Instagram account</label>
      <input placeholder='type your Instagram account' type="email" />
      </div>
      <div className='input'>
      <label>password instagram</label>
      <input placeholder='type your password Instagram' type="Password" />
      </div>
      {/*switch account facebook */}
      <div className='switch'>
      <p>Is there a Facebook account linked to the account?</p>
      <Switch {...label} onClick={handleToggle} />
      <div className='input input-switch' >
      <label>Facebook account</label>
      <input placeholder='type your Facebook account ' type="email" />
      </div>
      <div className='input input-switch' >
      <label>password Facebook</label>
      <input placeholder='type your password Facebook' type="Password" />
      </div>
      </div>
      {/*Logo ؤاخخسث بهمث */}
      <p>Upload your own logo</p>
      <div className='input' >
      <label>logo</label>
      <input placeholder='type your Facebook account ' type="file" />
      </div>
      <div className='input' >
      <label>Activity type</label>
      <input placeholder='type your Activity type ' type="text" />
      </div>
      <div className='input' >
      <label>Target group</label>
      <input placeholder='type your Target group ' type="text" />
      </div>
    </StyleFormData>
  )
}
const StyleFormData = styled.form`
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
@media (max-width:490px) {
  padding: 20px 0;
  align-items: center;
  }

.input{
  position: relative;

}
input{
  padding: 15px 20px;
  width: 300px;
  overflow: hidden;
  @media (max-width:360px) {
    width: 250px;
    
  }
  margin: 15px 0;
  border: 1px solid #c7c7c7;
  &::placeholder{
    opacity: 0.7;
  }
}
label {
  position: absolute;
  background-color: white;
  top: 2px;
  color: var(--primary-color);
  font-weight: 600;
  
}
p{
    width: 290px;
    font-size: 15px;
    font-weight: 600;
    @media (max-width:490px) {
      width: 280px;
  }
  }
.switch{
  .input-switch{
    display: ${({toggle}) => toggle ? 'block' : 'none'};
} 
 
}
`
export default FormData