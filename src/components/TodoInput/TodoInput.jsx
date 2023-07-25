import React, { useState } from 'react'

function TodoInput() {
  const [inputName, setInputName] = useState('')
  return (
    <div>
      <input 
      type='text' 
      style={{padding:'12px 16px', border:'2px solid black', marginBottom:'16px'}} 
      placeholder='Enter your todo' 
      value={inputName} 
      onChange={(e)=> setInputName(e.target.value)}/>
      <button style={{padding:'12px 16px', backgroundColor:'blue'}}>Add</button>
    </div>
  )
}

export default TodoInput