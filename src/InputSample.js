import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const {name, nickname} = inputs;
    const nameInput = useRef();

    const onChange = (e) => {
        const {name, value} = e.target;
        // obj.name - 지정된 값, obj[name] - 변수 활용가능
        // 객체 상태의 업데이트는 불변성 때문에 복사후 업데이트
        // const nextValue = {
        //     ...inputs
        // }
        // nextValue.name = value;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    }

    return (
        <div>
            <input 
                name='name'
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input name='nickname' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>Reset Value</button>
            <div>
                <b>Value:</b> {name}({nickname})
            </div>
        </div>
    );
}

export default  InputSample;