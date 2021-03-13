import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faTwitterSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import logo from '../../img/MyLogo.png';
import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleSubmit = e => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: e.target.description.value,
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
    }

    return (
        <div className="">
        <header className="py-2 px-16 flex justify-between bg-black bg-opacity-50">
            <a href="#">
            <img src={logo} alt="Logo"/>
            </a>
            <div className="flex justify-between gap-16 items-center">
                <a href="www.facebook.com/elvisalarconcahuana"><FontAwesomeIcon icon={faFacebookSquare} className="text-3xl text-blue-600 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a>
                <a href="github.com/NelsonAlarcon"><FontAwesomeIcon icon={faGithubSquare} className="text-3xl text-white hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a>
                <a href="twitter.com/NelsonAlarconEl"><FontAwesomeIcon icon={faTwitterSquare} className="text-3xl text-blue-400 hover:text-red-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a>
            </div>
        </header>
        <div className="container mx-auto py-16">
            <h1 className="text-center text-4xl uppercase text-blue-800 font-semibold">App de Tareas</h1>
            <p className="text-black text-center text-xl">- Tareas por realizar: { todos.length } -</p>        
            <div className="grid lg:grid-cols-2 gap-y-11 lg:gap-x-16 mt-4 shadow-md bg-rgbaWhite py-16 px-8 lg:rounded-lg">
                <ul>
                    <p className="text-center text-2xl font-bold mb-12 border-b border-black w-auto">Tareas Pendientes</p>
                    {
                        todos.map((todo, i) => (
                            <li
                                key={ todo.id }
                                className="lg:flex lg:justify-between lg:mb-4 py-4 lg:items-center"
                            >
                                <div className="todo flex lg:gap-1 mb-4 items-center justify-center">
                                    <span className="text-blue-600 lg:text-xl text-2xl  font-semibold">{ i + 1 } -</span>
                                    <p className="text-blue-600 lg:text-xl text-2xl font-semibold">{ todo.desc }</p>
                                </div>
                                <button className="py-2 px-8 bg-red-500 rounded-full hover:bg-red-600 text-white transition duration-300 ease-in-out w-full lg:w-auto">Borrar</button>
                            </li>
                        ))
                    }
                </ul>
                <div>
                <p className="text-center text-2xl font-bold mb-12 border-b border-black">Agregar Tarea</p>
                    <form onSubmit={ handleSubmit } className="lg:flex lg:justify-between lg:mb-4 py-4">
                        <input type="text" name="description" autoComplete="false" placeholder="Tarea  . . ." className="rounded-lg py-1 px-2 focus:outline-none focus:ring w-full lg:w-auto mb-4 text-2xl"/>
                        <button className="py-2 px-8 bg-green-500 rounded-full hover:bg-green-600 text-white transition duration-300 ease-in-out w-full lg:w-auto" type="submit">Agregar</button>
                    </form>
                </div>
            </div>

        </div>
        </div>
    )
}

export default TodoApp
