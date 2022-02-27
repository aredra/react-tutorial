import React, { useState } from "react";

export const Dialog = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            padding: "1rem",
            backgroundColor: "white",
          }}
        >
          {typeof props.title === "string" ? (
            <h1>{props.title}</h1>
          ) : (
            props.title
          )}
          {typeof props.description === "string" ? (
            <p>{props.description}</p>
          ) : (
            props.description
          )}
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#999",
          }}
        ></div>
      )}
    </>
  );
};
