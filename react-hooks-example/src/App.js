import logo from './logo.svg';
import './App.css';
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example1/>
        <Example2/>
        <Example3/>
        <Example4/>
        <Example5/>
      </header>
    </div>
  );
}

export default App;
