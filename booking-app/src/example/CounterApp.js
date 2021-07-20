import React, {useState} from 'react';
import CounterAction from "./CounterAction";
import CounterDisplay from "./CounterDisplay";
import CounterView from "./CounterView";


const CounterApp = () => {
    const[count, setCount] = useState(0);


    return (
        <div>
            {/*<div>*/}
            {/*    <CounterAction increment={() => setCount(count+1)}*/}
            {/*                   decrement={() => setCount(count-1)} />*/}
            {/*    <CounterDisplay count={count} />*/}

            {/*</div>*/}
            <CounterView>
                <CounterAction />
                <CounterAction />
                <CounterDisplay />
                <CounterDisplay />
            </CounterView>

        </div>
    );
};

export default CounterApp;