import React from 'react'

const TodoItem = () => {
  return (
    <li key={item.id}>
             <textarea ref={inputRef} 
                      disabled={inputRef} 
                      defaultValue={item.item} 
                      onKeyPress={(e) => update(item.id, inputRef.current.value, e)}/>
            
            
            <button onClick={() => changeFocus()}>Edit</button> 
            <button onClick={() => props.completeTodo(item.id)}>
              Complete</button> 

            <button onClick={() => props.removeTodos(item.id)}>Delete</button>
            </li>
  )
}

export default TodoItem
