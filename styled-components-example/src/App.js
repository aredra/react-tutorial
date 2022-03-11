import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import styled, { createGlobalStyle } from "styled-components";
import StyledA from "./components/StyledA";
import StyledComponentExample from "./components/StyledComponentExample";

const PrimaryStyledButton = styled(StyledButton)`
  background: darkgreen;
  border: none;
  color: #fff;
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);
const MyButton = (props) => (
  <button
    className={props.className}
    {...props}
    children={`MyButton ${props.children}`}
  />
);
const StyledMyButton = styled(MyButton)`
  background: darkgreen;
  border: 2px solid ${(props) => props.color || "#fff"};
  color: #fff;
`;
const GlobalStyle = createGlobalStyle`
button {
  color: #fff !important;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <StyledComponentExample />
        <p>
          <StyledButton>Button</StyledButton>
          <StyledButton primary>Button</StyledButton>
          <PrimaryStyledButton>Button</PrimaryStyledButton>
          <StyledButton as="a" href="/">
            Button
          </StyledButton>
          <StyledButton as={UppercaseButton}>Button</StyledButton>
          <StyledMyButton color="yellow" />
          <StyledA href="https://google.com">Go Google</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
