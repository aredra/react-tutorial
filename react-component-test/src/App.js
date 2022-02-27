import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { WelcomeDialog } from "./components/WelcomeDialog";
import { ThankyouDialog } from "./components/ThankyouDialog";

function App() {
  return (
    <div className="App">
      {/* <WelcomeDialog /> */}
      <ThankyouDialog />
    </div>
  );
}

export default App;
