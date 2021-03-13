import React, { useState, useEffect } from 'react'
import Message from './Message';
import './form.css';
const SimpleForm = () => {


    const [form, setForm] = useState({
        name: '',
        email: ''
    })
    const { name, email } = form;

    useEffect(() => {
        // console.log('Hey!');
    }, []);
    useEffect(() => {
        // console.log('El form ha sido cambiado');
    }, [form]);
    useEffect(() => {
        // console.log('Email cambiado!');
    }, [email]);
    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }
    return (
        <>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    autoComplete="off"
                    placeholder="Your Name..."
                    onChange={ handleChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="off"
                    placeholder="mail@gmail.com"
                    onChange={ handleChange }
                />
            </div>

            {(name == 123) && <Message /> }
        </>
    )
}

export default SimpleForm
