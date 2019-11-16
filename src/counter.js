import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default :
            throw new Error('Unhandled action') ;
    }
}

function Counter() {
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    // const [number, setNumber] = useState(0);
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        // setNumber(number + 1);
        dispatch({
            type: 'INCREMENT'
        });
    }

    const onDecrease = function () {
        // setNumber(prevNumber => prevNumber - 1);
        dispatch({
            type: 'DECREMENT'
        });
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter