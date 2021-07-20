import React, {useState} from 'react';

export const CounterContext = React.createContext();

const CounterView = (props) => {
    const[count, setCount] = useState(0);

    return <CounterContext.Provider value={{
            count: count,
            increment: () => setCount(count+1),
            decrement: () => setCount(count-1)
        }}>
            {props.children}
        </CounterContext.Provider>

}

export default CounterView;