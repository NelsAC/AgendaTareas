import React, { useState } from 'react'

const HooksApp = () => {
    const [count, setCount] = useState("");
    const changeHandler = (e) => setCount(e.target.value);
    return (
        <div>
            <input type="text" onChange={ changeHandler } />
            <h1>{ count }</h1>
        </div>
    )
}

export default HooksApp
