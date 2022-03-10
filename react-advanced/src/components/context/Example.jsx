import React, { useCallback, useState } from "react";
import { ThemeContext, themes } from "./ThemeContext";
import ThemedButton from "./ThemedButton";

const Example = () => {
  const [theme, setTheme] = useState(themes.light);
  const changeTheme = useCallback(
    () => setTheme(theme === themes.light ? themes.dark : themes.light),
    [theme]
  );
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemedButton changeTheme={changeTheme} />
        <ThemeContext.Consumer>
          {(theme) => (
            <p
              style={{
                backgroundColor: theme.foreground,
                color: theme.background,
              }}
            >
              {theme.background}
            </p>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
      <ThemedButton changeTheme={changeTheme} />
    </div>
  );
};

export default Example;
