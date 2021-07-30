import PersonContext from "../contexts/PersonContext";

export default function ConsumerExample() {
  return (
    <PersonContext.Consumer>
      {(people) => (
        <ul>
          {people.map((el) => (
            <li>{el.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
}
