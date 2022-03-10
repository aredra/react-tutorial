import React from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedButton = ({ props, changeTheme }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <button
      {...props}
      onClick={changeTheme}
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      Button
    </button>
  );
};

export default ThemedButton;
