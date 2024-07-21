import { useState,useEffect } from 'react'
import TodoInput from './component/TodoInput'
import TodoCard from './component/TodoCard'
import TodoList from './component/TodoList'

function App() {
  const [Todo, setTodo] = useState([])
  const [todoValue,settodoValue]=useState("")

  function persist(newlist)
  {
    localStorage.setItem("Todo",JSON.stringify({Todo :newlist}))
  }
  function HandleUpdate(NewTodolist){
    const newTodo=[...Todo,NewTodolist]
    persist(newTodo)
    setTodo(newTodo)
  }
  function handleDelete(index){
      const newTodo=Todo.filter((Todo,Todoindex)=>{
        return index!==Todoindex
      })
      persist(newTodo)
      setTodo(newTodo)
  }  
  function handleedit(index) { 
      const todoEdit=Todo[index]
      settodoValue(todoEdit)
      handleDelete(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos=localStorage.getItem("Todo")
    if(!localTodos)
    {
      return
    }
    localTodos=JSON.parse(localTodos).Todo
    setTodo(localTodos)
  })
  return (
    <>
    <div className='container'>
    <h1>TODO APP</h1>
    <TodoInput handleAddTodo={HandleUpdate} todoValue={todoValue} settodoValue={settodoValue}/>
    <TodoList todos={Todo} handleDelete={handleDelete} handleedit={handleedit}/>
    </div>
    </>
  )
}

export default App
