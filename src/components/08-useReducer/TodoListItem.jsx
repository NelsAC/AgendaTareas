import React from 'react'

const TodoListItem = (props) => {
    const {todo, i, handleDelete, handleToggle}=props;
    return (
       
        <li
        className="lg:flex lg:justify-between lg:mb-4 py-4 lg:items-center "
        >
            <div 
            className={`todo flex lg:gap-1 mb-4 items-center justify-center cursor-pointer text-red-600   lg:pl-8 select-none ${ todo.done && 'line-through'}`}
            onClick={ ()=>handleToggle(todo.id) }>
                <span className="text-blue-600 lg:text-xl text-2xl  font-semibold">{ i + 1 } -</span>
                <p 
                className="text-blue-600 lg:text-xl text-2xl font-semibold"
                >{ todo.desc }</p>
            </div>
            <button 
            className="py-2 px-8 bg-red-500 rounded-full hover:bg-red-600 text-white transition duration-300 ease-in-out w-full lg:w-auto focus:outline-none"
            onClick={ ()=>handleDelete(todo.id) }
            >Borrar</button>
        </li>
       
    )
}

export default TodoListItem
