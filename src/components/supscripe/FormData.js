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
      {/*Logo  */}
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
      {/* Choose Categories*/}
  <select name="Target-group" id="Target-group">
    <option value="volvo">Choose the target group</option>
    <option value="saab">Man</option>
    <option value="opel">Woman</option>
    <option value="audi">Children</option>
    <option value="audi">All of the above</option>
  </select>
      <div className='input' >
      <label>age group</label>
      <input placeholder='What are the ages of the class from [..] to [..]?' type="number" />
      </div>
     {/*Your favorite account names*/}
     <p>Your favorite account names</p>
     <div className='input' >
      <label>first account</label>
      <input placeholder='type your first account ' type="email" />
      </div>
      <div className='input' >
      <label>second account</label>
      <input placeholder='type your second account ' type="email" />
      </div>
      <div className='input' >
      <label>third account</label>
      <input placeholder='type your third account ' type="email" />
      </div>
       {/*List the competitors accounts*/}
       <p>List the competitors accounts</p>
     <div className='input' >
      <label>first account</label>
      <input placeholder='type your first account ' type="email" />
      </div>
      <div className='input' >
      <label>second account</label>
      <input placeholder='type your second account ' type="email" />
      </div>
      <div className='input' >
      <label>third account</label>
      <input placeholder='type your third account ' type="email" />
      </div>
      {/*Choose content*/}
      <p>Is the content you want in Arabic or English?</p>
    <select name="Target-group" id="Target-group">
    <option value="opel">English</option>
    <option value="audi">Arabic</option>
    <option value="audi">All of the above</option>
    </select>
    <select name="Target-group" id="Target-group">
    <option value="opel">Content writing</option>
    <option value="audi">through the team</option>
    <option value="audi">Through you</option>
    </select>
    <div className='input' >
      <input placeholder='Describe your activity with the example you want' type="text" />
    </div>
    <div className='input' >
      <input placeholder='Average prices for your services' type="text" />
    </div>
    <div className='input' >
      <input placeholder='The goal of managing the account you want ' type="email" />
    </div>
    {/*Choose theme*/}
    <select name="Target-group" id="Target-group">
    <option value="opel">Choose the sim you want</option>
    <option value="audi">Full</option>
    <option value="audi">You have a line of three posts</option>
    </select>
    <p>In the case of purchasing a photo session, please specify the date</p>
    <div className='input' >
      <input placeholder='Describe your activity with the example you want' type="date" />
    </div>
    {/*Questions for the bio*/}
    <p>Questions for the bio</p>
    <div className='input' >
    <label>Request link</label>
      <input placeholder='please type Request link' type="text" />
    </div>
    
    <div className='input' >
    <label>Request-------</label>
      <input placeholder='please type Request-------' type="text" />
    </div>
    <div className='input' >
    <label>personal website</label>
      <input placeholder='please type personal website link ' type="text" />
    </div>
    <div className='input' >
    <label>Instagram link</label>
      <input placeholder='please type Instagram link ' type="text" />
    </div>
    <div className='input' >
    <label>Location link</label>
      <input placeholder='please type Location link' type="text" />
    </div>
    <div className='input' >
    <label>whatsapp number</label>
      <input placeholder='please type whatsapp number' type="number" />
    </div>
    <div className='input' >
    <label>contact number</label>
      <input placeholder='please type contact number' type="number" />
    </div>
    <div className='button'>
    <button >Send</button>
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
  
  }

.input{
  position: relative;

}
input{
  padding: 15px 20px;
  width: 370px;
  overflow: hidden;
  @media (max-width:450px) {
    width: 300px;
    
  }
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
    padding: 8px 0;
    font-weight: bold;
    @media (max-width:490px) {
      width: 250px;
  }
  }
.switch{
  .input-switch{
    display: ${({toggle}) => toggle ? 'block' : 'none'};
} 
 
}
select{
  background-color: var(--primary-color);
  padding: 10px;
  color: white;
  border: 1px solid #c7c7c7;
  margin: 5px 0;

  option{
    border: 1px solid #c7c7c7;
    padding: 8px;
  }
}
.button{
  margin: auto;
  button{
    all: unset;
    padding: 8px 20px;
    text-align: center;
    width: 100px;
    color: white;
    cursor: pointer;
    background-color: var(--primary-color);

  }
}
`
export default FormData