import {useState, useCallback} from 'react'

function useInputsState(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    const onReset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, onReset];
}

export default useInputsState;