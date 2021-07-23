import React from 'react';
import CounterDisplay from "./CounterDisplay";
import {Subject} from "rxjs";
import Increment from "./Increment";
import Decrement from "./Decrement";

export const counter = new Subject();

const CounterApp = () => {
    return (
        <div>
            <CounterDisplay />
            <Increment />
            <Decrement />
        </div>
    );
};

export default CounterApp;