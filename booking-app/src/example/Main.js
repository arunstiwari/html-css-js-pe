import React, {useCallback, useEffect, useMemo, useState} from "react";

const Foo = ({bar, baz}) => {
    // const options = {bar,baz};

    useEffect(() => {
        display({bar, baz});
    },[bar, baz]);

    const display = (opt) => {
        console.log('--opt---',opt);
    }

    return <div>zyz</div>
}

const Main = () => {
    const [count, setCount] = useState(0);
    let baz = {
        a: '232',
        b: '456'
    };
    let baz1 = useCallback(()=> ({a:1, b:2 }),[]);
    let bar = useMemo(() => [0,1,2,3], []);


    return (
        <div>
            <Foo bar={bar} baz={baz1} />
            <button onClick={()=> setCount(count+1)}>Click Me</button>
                <span>{count}</span>
        </div>
    )
}

export default Main;
