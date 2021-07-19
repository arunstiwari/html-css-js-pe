import React, {useEffect, useState} from 'react';

const SayHello = () => {
    const greetings = ['Hello', 'Namaste', 'Hi'];
    const[index, setIndex] = useState(0);
    const[count, setCount] = useState(0);

    // useEffect is replacement for lifecycle callback method - componentDidMount(), componentDidUpdate(), componentWillUnmount()
    useEffect(() => {
        document.title = greetings[index];
        console.log('--in use effect---');

        return () => {
            console.log('In unmounting phase this should be ideally called');
            setCount(0);
        }
    },[count]);

    useEffect(() => {
        console.log('in useeffect for index');
    },[index])

    const updateGreeting = () => {
        setIndex(Math.floor(Math.random()* greetings.length));
        console.log('index : ',index);
        // document.title = greetings[index];
    }

    return (
        <>
        <button onClick={updateGreeting}>
            Say Hi
        </button>
        <button onClick={() => setCount(count+1)}>Clicked Me {count} times</button>
        </>
    );
};

export default SayHello;