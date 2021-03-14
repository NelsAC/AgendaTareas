import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import Header from '../Header/Header';
import ProgressTodo from './ProgressTodo';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learn React',
    //     done: false
    // }];
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
   

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }
    
    const handleDelete=(todoId) =>{
        dispatch({ 
            type: 'delete',
            payload: todoId
        });
    }
    const handleToggle=(todoId) =>{
        dispatch({ 
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <>
            <ProgressTodo todos={todos}/>
            <Header />
            <div className="container mx-auto py-16">
                <h1 className="text-center text-4xl uppercase text-blue-800 font-semibold">App de Tareas</h1>
                <p className="text-black text-center text-xl">- Tareas por realizar: { todos.length } -</p>        
                <div className="grid lg:grid-cols-2 gap-y-11 lg:gap-x-16 mt-4 shadow-md bg-rgbaWhite py-16 px-8 lg:rounded-lg">
                    <TodoList 
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    />
                    <TodoForm 
                    handleAdd={handleAdd}
                    />    
                </div>
            </div>
        </>
    )
}

export default TodoApp
