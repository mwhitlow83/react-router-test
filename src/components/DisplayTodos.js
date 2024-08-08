import React from 'react'
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import { connect } from 'react-redux';
import { useState } from 'react';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
      removeTodo: (id) => dispatch(removeTodos(id)),
      updateTodo: (obj) => dispatch(updateTodos(obj)),
      completeTodo: (id) => dispatch(completeTodos(id)),
    };
  };

const DisplayTodos = (props) => {
    const [sort, setSort] = useState('active')
  return (
    <div className='displaytodos'>
      <div className='buttons'>
        <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={()=>setSort('active')}>Active</motion.button>
        <motion.button 
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
        onClick={()=>setSort('completed')}>Completed</motion.button>
        <motion.button 
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
        onClick={()=>setSort('all')}>All</motion.button>

      </div>
      <ul>
       <animatePresence>
       {
        props.todos.length > 0 && sort === 'active' 
        ? props.todos.map(item => {
            return (
                item.completed === false && 
                <TodoItem 
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}

                    />
                )
            })
            : null}
        {
 props.todos.length > 0 && sort === 'cpmpleted' 
 ? props.todos.map(item => {
     return (
         item.completed === true && 
         <TodoItem 
             key={item.id}
             item={item}
             removeTodo={props.removeTodo}
             updateTodo={props.updateTodo}
             completeTodo={props.completeTodo}

             />
         )
     })
     : null}

        {
            props.todos.length > 0 && sort === 'all' 
            ? props.todos.map(item => {
                return (
                    
                    <TodoItem 
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
    
                        />
                    )
                })
                : null} 
        
       </animatePresence>
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos)
