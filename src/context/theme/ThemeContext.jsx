import React from "react";

export const initialThemeState = {
  darkTheme: window.matchMedia("(prefers-color-scheme: dark)").matches || false,
  setDarkTheme: () => null
};

const ThemeContext = React.createContext(initialThemeState);
export default ThemeContext;
