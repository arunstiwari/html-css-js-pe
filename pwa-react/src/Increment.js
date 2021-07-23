import React from 'react';
import {counter} from "./CounterApp";

const Increment = () => {
    return (
        <div>
            <button onClick={() => counter.next(1)}>Increase</button>
        </div>
    );
};

export default Increment;