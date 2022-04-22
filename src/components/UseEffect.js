import React, { useEffect, useLayoutEffect, useState } from 'react';



const UseEffectHook = () => {


    const [count, setCount] = useState(0);
    const [name, setName] = useState(null)



    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    const handleInputChange = ({ target }) => {
        setName(target.value)
    }

    useEffect(() => {
        console.log("Se actualizó el estado de count");
    }, [count])


    useEffect(() => {
        console.log("Se actualizó el estado de name");
    }, [name])



    return (
        <>
            {
                name &&
                <h1>{name}</h1>
            }

            <div >
                <h1>{count}</h1>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleReset}>reset</button>
                <button onClick={handleIncrement}>+</button>
            </div>
            <input placeholder='ingresa tu nombre' onChange={handleInputChange} />
        </>
    )
}

export default UseEffectHook;