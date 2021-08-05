import { useEffect, useRef, useState } from "react";

const BUTTON_TEXT = {
  NORMAL: "-",
  CLICKED: "Clicked",
};
export default function Button() {
  const [message, setMeassage] = useState(BUTTON_TEXT.NORMAL);
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div>
      <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>
        Click me
      </button>
      <p>{message}</p>
    </div>
  );

  function click() {
    setMeassage(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMeassage(BUTTON_TEXT.NORMAL);
    }, 5000);
  }
}
