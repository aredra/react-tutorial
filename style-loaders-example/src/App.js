import logo from "./logo.svg";
// import "./App.css";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button> Button </Button>
      </header>
    </div>
  );
}

export default App;
