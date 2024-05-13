import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [title,setTitle] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo(title)
        setTitle("")
    }

    const handleChangeTitle = (event)=>{
        setTitle(event.target.value)
        // console.log(event.target.value)
    }

  return (
    <div style={styles.container}>
        <form
            onSubmit={(e)=>{
                handleSubmit(e)
            }}
        >
            <input 
                type='text'
                placeholder='Add Your Todo'
                style={styles.formInput}
                onChange={(e)=>{
                    handleChangeTitle(e)
                }}
                value={title}
            />
        <button style={styles.button}>Add Todo</button>
        </form>
    </div>
  )
}

const styles={
    container:{
        marginBottom:"32px"
    },

    formInput:{
        height:"66px",
        width:"40%",
        fontSize:"16px",
        padding:"0 16px"
    },

    button:{
        height:"72px",
        fontSize:"16px"
    }
}

export default TodoForm