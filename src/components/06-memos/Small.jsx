import React, { memo } from 'react';


export const Small = memo(({ value }) => {
    console.log('Me volví a llamar :c');
    return (
        <small> { value } </small>
    )
});
