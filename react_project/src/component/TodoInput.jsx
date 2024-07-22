import React, { useState } from 'react'
function TodoInput(props) {
    const {handleAddTodo ,todoValue,settodoValue}=props
  return (
    <>
        <form>
            <input  value={todoValue} onChange={(e)=>{
                settodoValue(e.target.value)
            }} className="inputtxt" type="text" placeholder='Enter your List'></input>
        </form>
        <button onClick={()=>{
            handleAddTodo(todoValue)
            settodoValue("")
        }} className='bttn'>Add</button>
     </>    
  )
}

export default TodoInput