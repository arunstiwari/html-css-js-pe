import React, {useEffect, useState} from 'react';
import {counter} from "./CounterApp";

const CounterDisplay = () => {
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        counter.subscribe((val) => setNumber(val));
    })

    return (
        <div>
           Counter:  {number}
        </div>
    );
};

export default CounterDisplay;