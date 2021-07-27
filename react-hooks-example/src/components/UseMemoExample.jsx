import { useState, useMemo, useCallback } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((acc, el) => acc + el, 0);
}
export default function UseMemoExample() {
  const [value, setValue] = useState("");
  const [persons] = useState([{ name: "Aredra", age: 9999 }]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
