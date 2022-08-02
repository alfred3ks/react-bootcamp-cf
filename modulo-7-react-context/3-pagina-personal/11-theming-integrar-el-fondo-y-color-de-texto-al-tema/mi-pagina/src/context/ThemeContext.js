import { createContext, useState } from "react";

export const lightTheme = {
  type: "light",
  colors: {
    primary: "#f72585",
    text: "#14213d",
    background: "#fff",
    lightText: "#fff",
    primaryText: "#2ec4b6",
    darkBackground: "#14213d"
  }
};

export const darkTheme = {
  type: "dark",
  colors: {
    primary: "",
    text: "",
    background: "",
    lightText: "",
    primaryText: "",
    darkBackground: ""
  }

};

export const ThemeContext = createContext([lightTheme, () => { }]);

const ThemeProvider = ({ children }) => {
  console.log(children);
  // const [theme, setTheme] = useState(lightTheme);
  const themeState = useState(lightTheme);
  console.log(themeState);
  return <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  // return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;