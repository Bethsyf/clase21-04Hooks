import React, { useState } from 'react';

const UseStateHook = () => {

//     const [count, setCount] = useState(0);

//     const addCount = () => {
//         setCount(count+1);
//     }
//     const decrementCount = () => {
//         setCount(count-1);
//     }

const [showText, setShowText] = useState(false)

    return (
        <>
        {/* <div styled={{ display: 'flex' }}>
            <button onClick={decrementCount}>-</button>
            <h1>{count}</h1>
            <button onClick={addCount}>+</button>
            
        </div> */}

        <div>
            <button onClick={() => setShowText(!showText)}>click</button>
            {
                showText &&
                <h1>Cambiamos el estado</h1>
            }
        </div>
        </>
    )
}

export default UseStateHook