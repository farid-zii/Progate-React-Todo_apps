import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
function App() {
  
  const [todos,setTodos] = useState([
    {
      id:1,
      title:'Finish Progate React Course',
      completed:false
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

  const toogleCompleted=(todoId)=>{
    const updatedTodos = todos.map((todo)=>{
      if(todo.id === todoId){
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodos)
  };
  const deleteTodo=(todoId)=>{
    const updatedTodos = todos.filter((todo)=>{
      // Cari / filter isi todos jadikan satuan todo
      if(todo.id !== todoId){
        // cek apakah id didalam todo sama dengan todoId
        return todo
        //kembalikan todo
      }
    })
    setTodos(updatedTodos)
    //update todo
  };


  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>

         <Todos todos={todos} toogleCompleted={toogleCompleted} deleteTodo={deleteTodo}/>
      </div> 
    </>
  )
}

const styles={
  container:{
    textAlign:"center",
    padding:"12px"
  },
  title:{
    fontSize:"36px"
  }
}


export default App
