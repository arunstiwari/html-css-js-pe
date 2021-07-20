import React, {useContext} from 'react';
import {CounterContext} from "./CounterView";

const CounterDisplay = () => {
    let context = useContext(CounterContext);
    return (
        <div>{context.count}</div>
    )
}
export default CounterDisplay;