import React from 'react';

function User({user, onRemove}) {
    const {id, username, email} = user;

    return (
        <div>
            <b>{username}</b> ({email}) 
            <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    );
}

function UserList({users, onRemove}) {
    return (
        <div>
        {
            //key가 없으면 console.error 출력
            //index를 쓸 수 있으나 성능이 좋아지지는 않음
            // users.map((user, index) => <User user={user} key={index}/>)
            users.map(
                    user =>
                        <User user={user} onRemove={onRemove} key={user.id}/>
                )
        }
        </div>
    );
}

export default UserList;