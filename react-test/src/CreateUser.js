import React, {useContext, useRef} from 'react';
import { UseDispatch } from './App';
import useInputsState from './useInputsState';

function CreateUser() {
    const dispatch = useContext(UseDispatch);
    const [form, onChange, onReset] = useInputsState({
        username: '',
        email: ''
    });
    const {username, email} = form;
    const nextId = useRef(4);
    const onCreate = () => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
        onReset();
    }

    return (
        <>
            <input
                name='username'
                placeholder='name'
                onChange={onChange}
                value={username}
            />
            <input
                name='email'
                placeholder='email'
                onChange={onChange}
                value={email}
            /> 
            <button onClick={onCreate}>Registeration</button>
        </>
    );
}

export default React.memo(CreateUser);
