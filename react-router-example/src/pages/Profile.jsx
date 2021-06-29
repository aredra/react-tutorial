export default function Profile(props) {
  const id = props.match.params.id;
  return (
    <div>
      <h2>Profile Page</h2>
      {id && <p>id: {id}!</p>}
    </div>
  );
}
