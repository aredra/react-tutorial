import React from 'react';

function Hello(props) {
    // 값이 변할 경우 삼항연사자 show/hide 일 경우 && 연산자
    return <div style={{color: props.color}}>{props.isSpecial && <b>#</b>}Hi, Welcome Aredra!<br/>Welcome {props.name}</div>;
}

Hello.defaultProps = {
    name: "no name",
    color: "aqua"
}

export default Hello;