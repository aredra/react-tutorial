import React from "react";

export const ControlledComponent = () => {
  const [name, setName] = React.useState("");
  const [flavor, setFlavor] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    }
    if (name === "flavor") {
      setFlavor(value);
    }
  };

  const handleFlavorChange = (event) => {
    setFlavor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${name}: ${flavor}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <label htmlFor="">
        <select name="flavor" value={flavor} onChang={handleChange}>
          <option value="graph">graph</option>
          <option value="apple">apple</option>
          <option value="banana">banana</option>
          <option value="orange">orange</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
