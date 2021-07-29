import { useHistory, withRouter } from "react-router-dom";

// export default withRouter(function LoginButton(props) {
//   function login() {
//     setTimeout(() => {
//       props.history.push("/");
//     }, 1000);
//   }

//   return <button onClick={login}>Sign in</button>;
// });

export default function LoginButton() {
  const history = useHistory();

  function login() {
    setTimeout(() => {
      history.push("/");
    }, 1000);
  }

  return <button onClick={login}>Sign in</button>;
}
