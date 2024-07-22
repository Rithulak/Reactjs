import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {
    const {todos}=props
  return (
    <>
    <div className="form">
            <h2>My List</h2>
            <ul class="formlist">
                {todos.map((list,index)=>{
                    return (<TodoCard {...props} key={index}
                    todoindex={index}>
                            <p className='para'>{list}</p>
                    </TodoCard>)
                })}
            </ul>
    </div>
    </>
  )
}
