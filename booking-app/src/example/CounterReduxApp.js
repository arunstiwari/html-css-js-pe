import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, incrementAsync, incrementByAmount, selectCount} from "./counterReducer";


const CounterReduxApp = () => {
    const dispatch = useDispatch();
    const [inputAmount, setInputAmount] = useState(2);
    const count = useSelector(selectCount);

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <div>
                <input type="text"
                       placeholder="Name..."
                       value={inputAmount}
                       onInput={(e)=> setInputAmount(e.target.value)} />
                <button onClick={() => dispatch(incrementByAmount(Number(inputAmount)))}>Add Amount</button>
                <button onClick={() => dispatch(incrementAsync(Number(inputAmount)))}>Async Add Amount</button>
            </div>
            <span>count: {count}</span>
        </div>
    );
};

export default CounterReduxApp;