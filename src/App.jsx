import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'
const initTodos = ['Di hoc','Quet Nha', 'Nau com']
function App() {
  const [todos, setTodo] = useState(initTodos);
  const handleAddTodo =(todoNew) =>{
    const newTodo = todo.push(todoNew)
    setTodo(newTodo)
  }
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <TodoInput />
        <TodoList todos={todos}/>
      </div>
    </>
  )
}

export default App
