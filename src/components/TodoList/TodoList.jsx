import React from 'react'
import Todo from '../Todo/Todo'

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo name={todo} />
      })}
    </div>
  )
}

export default TodoList
