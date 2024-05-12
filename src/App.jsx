import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [todos,setTodos] = useState([
    {
      id:1,
      title:'Finish Progate React Course',
      completed:false,
    },
    {
      id:2,
      title:'Have lunch with Guru Domba',
      completed:false,
    },
    {
      id:3,
      title:'Study React With Ninja Ken',
      completed:false,
    },
  ]);

  console.log(todos);
  return (
    <>
      <h1>My Todo List</h1>
      {todos.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
      })}
    </>
  )
}

export default App
