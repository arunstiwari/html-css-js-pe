import React, {useRef, useState} from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);
    const ref = useRef(1);

    const incrementCounter = () => {
        console.log('count : ',count);
         setCount(count+1);
    }

    const incrementReference = () => {
        ref.current++;
        console.log('ref.current : ',ref.current);
    }
    return (
        <div>
            <button onClick={incrementCounter}>count: {count}</button>
            <button onClick={incrementReference}>reference: {ref.current}</button>
        </div>
    );
};

export default Counter;