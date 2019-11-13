import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.name}</b> ({user.email})
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            name: 'aredra',
            email: 'aredra@gmail.com'
        },
        {
            id: 2,
            name: 'dev1',
            email: 'dev1@example.co.kr',
        },
        {
            id: 3,
            name: 'test',
            email: 'test@test.com'
        }
    ];

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