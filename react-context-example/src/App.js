import logo from "./logo.svg";
import "./App.css";
import ConsumerExample from "./components/ConsumerExample";
import ClassContext from "./components/ClassContext";
import FunctionContext from "./components/FunctionContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConsumerExample />
        <ClassContext />
        <FunctionContext />
      </header>
    </div>
  );
}

export default App;
