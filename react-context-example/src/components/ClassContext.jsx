import React from "react";
import PersonContext from "../contexts/PersonContext";

export default class ClassContext extends React.Component {
  static contextType = PersonContext;

  render() {
    const people = this.context;

    return (
      <ul>
        {people.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
    );
  }
}
