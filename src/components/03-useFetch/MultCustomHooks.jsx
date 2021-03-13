import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './customHooks.css'
const MultCustomHooks = () => {
    const { state: valor, increment } = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${valor}`;
    const { data, loading } = useFetch(url);
    const { author, quote } = !!data && data[0];
    return (
        <>
            <h1 className="text-center">The Breaking Bad</h1>
            <hr />
            {

                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    :

                    (
                        <blockquote className="container blockquote">
                            <p className="text-end"> { quote } </p>
                            <p className="blockquote-footer text-end"> { author } </p>
                        </blockquote>
                    )

            }
            {
                !loading &&
                <button
                    className="btn btn-primary m-auto d-block mt-5"
                    onClick={ () => increment(1) }>
                    Siguiente
                </button>
            }
        </>
    )
}

export default MultCustomHooks
