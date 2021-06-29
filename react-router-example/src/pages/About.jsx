import queryString from "query-string";

export default function About(props) {
  const searchParams = props.location.search;

  // const params = new URLSearchParams(searchParams);
  const query = queryString.parse(searchParams);
  console.log(query);
  return (
    <div>
      <h2>About Page</h2>
      {query.name && <p>{query.name}</p>}
    </div>
  );
}
