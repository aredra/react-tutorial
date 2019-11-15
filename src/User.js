import React, {useEffect} from 'react';

const User = React.memo(function User({user, onRemove, onToggle}) {
    const {id, username, email, active} = user;

    useEffect(()=> {
        console.log(`${id} is mounted or updated`);
        // prop-> state
        // REST API
        // 라이브러리 참조
        // setInterval, setTimeout
        return () => {
            // clearInterval, cleartTimeout
            // remove library instance
            console.log(`${id} is before updated or unmounted`)
        }
        // checking
    }, [id]);

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={()=>onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
        {
            //key가 없으면 console.error 출력
            //index를 쓸 수 있으나 성능이 좋아지지는 않음
            // users.map((user, index) => <User user={user} key={index}/>)
            users.map(
                    user =>
                        <User 
                            user={user}
                            onRemove={onRemove}
                            onToggle={onToggle}    
                            key={user.id}
                        />
                )
        }
        </div>
    );
}

export default React.memo(UserList);