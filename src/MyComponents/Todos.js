import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3"> My Todos List</h3>
            {
                props.todos.map((todo)=>{
                    return <TodoItem todo={todo} key= {todo.sno} onDelete={props.onDelete}></TodoItem>
                })
            }
          
        </div>
    )
}
