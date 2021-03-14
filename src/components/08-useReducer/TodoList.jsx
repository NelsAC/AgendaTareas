import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    const {todos, handleDelete, handleToggle} = props;
    return (
        <ul>
        <p className="text-center text-2xl font-bold mb-12 border-b border-black w-auto">Tareas Pendientes</p>
       
        {
            (todos.length > 0)?
            (
            todos.map((todo, i) => (
               <TodoListItem 
               todo={todo}
               i={i}
               handleDelete={handleDelete}
               handleToggle={handleToggle}
               key={todo.id}
               />
            ))
            ):
            (
                <p className="text-center text-blue-600 text-xl border-dotted border-4 border-blue-600 py-4">Ninguna tarea agregada :)</p>
            )
        }
    </ul>
    )
}

export default TodoList
