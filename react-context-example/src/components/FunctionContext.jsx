import PersonContext from "../contexts/PersonContext";
import { useContext } from "react";

export default function ConsumerExample() {
  const people = useContext(PersonContext);
  return (
    <ul>
      {people.map((el) => (
        <li>{el.name}</li>
      ))}
    </ul>
  );
}
