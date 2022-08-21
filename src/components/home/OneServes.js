import React, { useState } from 'react'

const OneServes = ({ id, img, des, name }) => {
 const [showString, setShowString] = useState(true)
 const ToggleShowString = () => {
  setShowString(!showString)
 }
 return (
  <div className='item-servces' key={id} >
   <img src={img} alt="photo" />
   <h3>{name}</h3>
   <div>
    <p>{showString ? `${des.substring(0, 80)}...` : des}</p>
    <button onClick={ToggleShowString}>{showString ? "READ MORE" : "READ LESS"}</button>
   </div>
  </div>
 )
}

export default OneServes