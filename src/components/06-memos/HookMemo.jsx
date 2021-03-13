import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/form.css'

const HookMemo = () => {
    const { state, increment } = useCounter(100);
    const [show, setshow] = useState(true);
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);
    return (
        <>
            <h1> MemoHook </h1>
            <h3> Counter: <small>{ state }</small> </h3>
            <hr />
            <p>{ memoProcesoPesado }</p>
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

export default HookMemo
