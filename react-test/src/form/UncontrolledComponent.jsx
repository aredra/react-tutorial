import React from "react";

export const UncontrolledComponent = () => {
  const fileInputRef = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
