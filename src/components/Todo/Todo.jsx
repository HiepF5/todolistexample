import React from 'react'

function Todo({name}) {
  return (
    <div style={{
      display:'flex',
      width: '450px',
      justifyContent: 'space-around',
      marginBottom:'20px',
      borderBottom:'1px solid #fff'
    }}>
      <div>{name}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Todo
