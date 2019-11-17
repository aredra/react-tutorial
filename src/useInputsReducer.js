import {useReducer, useCallback} from 'react';

function reducer (state, action) {
    switch(action.type) {
        case 'CHANGE_INPUT' :
            return {
                ...state,
                [action.name]: action.value
            }
        case 'RESET_INPUT' :
            return {
                ...state,
                username: '',
                email: ''
            }
        default :
            throw new Error('Unhandled action in useInputsReducer');
    }
}

function useInputsReducer(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e =>
        {
            const {name, value} = e.target;
            dispatch({
                type: 'CHANGE_INPUT',
                name,
                value
            });
        }, []
    );
    const onReset = useCallback(() => {
        dispatch({
            type: 'RESET_INPUT'
        });
    }, []);

    return [form, onChange, onReset];
}

export default useInputsReducer;