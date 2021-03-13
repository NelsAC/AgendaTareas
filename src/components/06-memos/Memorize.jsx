import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/form.css'
import { Small } from './Small';

const Memorize = () => {
    const [show, setshow] = useState(true);
    const { state, increment } = useCounter();
    return (
        <>
            <h1> Counter: <Small value={ state } /> </h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ () => increment(1) }>
                +1
            </button>
            <button
                className="btn btn-outline-primary ms-3"
                onClick={ () => setshow(!show) }>
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
}

export default Memorize
