import React from 'react';
import {counter} from "./CounterApp";

const Decrement = () => {
    return (
        <div>
            <div>
                <button onClick={() => counter.next(-1)}>Decrease</button>
            </div>
        </div>
    );
};

export default Decrement;