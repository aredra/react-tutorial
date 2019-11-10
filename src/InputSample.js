import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>Reset Value</button>
            <div>
                <b>Value:</b> {text}
            </div>
        </div>
    );
}

export default  InputSample;