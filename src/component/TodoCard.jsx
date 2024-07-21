import React from 'react'

export default function TodoCard(props) {
  const{children, handleDelete, todoindex, handleedit}=props
  return (
        <li className='mylist'>
            {children}
            <div className="icon">
             <button className='btned' onClick={()=>{
                handleedit(todoindex)
             }} >  
            <i class="fa-solid fa-pen-to-square"></i>
            </button> 
            <button className='btndel' onClick={()=>{
                handleDelete(todoindex)
            }}>
            <i class="fa-solid fa-trash"></i>
            </button>
            </div>
        </li>
  )
}
