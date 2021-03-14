import React from 'react'
import { useForm } from '../../hooks/useForm';

const TodoForm = ({handleAdd}) => {

    const [{description}, handleChange, reset]=useForm({
        description:'',
    });

    const handleSubmit=e=>{
        e.preventDefault();
        if(description.trim().length <=1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAdd(newTodo);
        reset();
    }
    return (
        <>
            <div>
                <p className="text-center text-2xl font-bold mb-12 border-b border-black">Agregar Tarea</p>
                <form onSubmit={ handleSubmit } className="lg:flex lg:justify-between lg:mb-4 py-4 lg:items-center">
                    <input 
                    type="text" 
                    name="description" 
                    autoComplete="false" 
                    placeholder="Tarea  ..." 
                    className="rounded-lg py-1 px-2 focus:outline-none focus:ring w-full lg:w-auto mb-4 text-2xl" 
                    value={ description } 
                    onChange={ handleChange }/>
                    <button 
                    className="py-2 px-8 bg-green-500 rounded-full hover:bg-green-600 text-white transition duration-300 ease-in-out w-full lg:w-auto focus:outline-none" 
                    type="submit"
                    >Agregar</button>
                </form>
            </div>
        </>
    )
}

export default TodoForm
