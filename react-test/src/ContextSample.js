import React, {useState, createContext, useContext} from 'react';

const MyContext = createContext('defalut value');

function Child() {
    const text = useContext(MyContext);
    return <div>aredra's status is {text}</div>;
}

function Parent() {
    return <Child />;
}

function GrandParent() {
    return <Parent />;
}

function ContextSample() {
    const [value, setValue] = useState(true);
    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent/>
            <button onClick={() => setValue(!value)}>change Status</button>
        </MyContext.Provider>
    );
}

export default ContextSample;