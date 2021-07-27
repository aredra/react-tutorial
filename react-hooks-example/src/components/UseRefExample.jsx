import { useState, useRef, createRef } from "react";

export default function UseMemoExample() {
  const [value, setValue] = useState("");
  const inputRef1 = createRef();
  const inputRef2 = useRef();

  console.log(inputRef1.current, inputRef2.current);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={inputRef1} />
      <input ref={inputRef2} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
