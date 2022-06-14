import React, { useState, useEffect } from "react";
import ThemeContext, { initialThemeState } from "./ThemeContext";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";


const themes = {
    dark: `${process.env.PUBLIC_URL}/theme.dark.css`,
    light: `${process.env.PUBLIC_URL}/theme.light.css`,
};
// const themes = {
//   light: "./light.css",
//   dark: "./dark.css"
// };

const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(initialThemeState.darkTheme);

    const localStorage = window.localStorage;

    useEffect(() => {
        let savedThemeLocal = localStorage.getItem("globalTheme")
            ? localStorage.getItem("globalTheme")
            : "false";
        if (!!savedThemeLocal) {
            savedThemeLocal = JSON.parse(savedThemeLocal);
            setDarkTheme(savedThemeLocal);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("globalTheme", darkTheme);
    }, [darkTheme]);
    
    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            <ThemeSwitcherProvider defaultTheme={darkTheme?'dark':'light'} themeMap={themes}>
                {children}
            </ThemeSwitcherProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
