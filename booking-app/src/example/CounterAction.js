import React, {useContext} from 'react';
import {CounterContext} from "./CounterView";

const CounterAction = () => {
    const context = useContext(CounterContext);

    return(
        <>
             <button onClick={context.increment}>Increase</button>
             <button onClick={context.decrement}>Decrease</button>
        </>
    )
}


export default CounterAction;