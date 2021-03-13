import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'
const CounterWithCustmHook = () => {
    const { state, increment, decrement, reset } = useCounter(0);
    return (
        <>
            <h1>CounterWithCustmHook { state }</h1>
            <hr />
            <button className="btn" onClick={ () => increment(2) }>+1</button>
            <button className="btn" onClick={ reset }>Reset</button>
            <button className="btn" onClick={ () => decrement(2) }>-1</button>
        </>
    )
}

export default CounterWithCustmHook
