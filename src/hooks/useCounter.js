import {useState} from 'react';

export const useCounter = (initialState) => {
    const [count, setCount] = useState(initialState);

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

    const handleReset = () => {
        setCount(initialState);
    }

    return{count, handleDecrement, handleIncrement, handleReset}
}