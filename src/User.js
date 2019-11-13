import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> ({user.email})
        </div>
    );
}

function UserList({users}) {
    return (
        <div>
        {
            //key가 없으면 console.error 출력
            //index를 쓸 수 있으나 성능이 좋아지지는 않음
            // users.map((user, index) => <User user={user} key={index}/>)
            users.map(user => <User user={user} key={user.id}/>)
        }
        </div>
    );
}

export default UserList;