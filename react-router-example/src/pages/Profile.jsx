import { useParams } from "react-router-dom";

export default function Profile() {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <h2>Profile Page</h2>
      {id && <p>id: {id}!</p>}
    </div>
  );
}
