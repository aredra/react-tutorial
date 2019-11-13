import React from 'react';

function CreateUser({username, email, onChange, onCreate}) {
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

export default CreateUser;
