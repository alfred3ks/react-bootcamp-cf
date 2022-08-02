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
    primary: "#571089",
    text: "#faedcb",
    background: "#130007",
    lightText: "#fff",
    primaryText: "#2ec4b6",
    darkBackground: "#000"
  }

};

export const ThemeContext = createContext([lightTheme, () => { }]);

const ThemeProvider = ({ children }) => {
  console.log(children);
  const [theme, setTheme] = useState(lightTheme);
  // const themeState = useState(lightTheme);
  // console.log(themeState);

  // Aqui hacemos el cambio del modo: Para mayor control:
  const toggleTheme = () => {
    const newTheme = theme.type === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
  }

  return <ThemeContext.Provider value={[theme, toggleTheme]}>{children}</ThemeContext.Provider>
  // return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;