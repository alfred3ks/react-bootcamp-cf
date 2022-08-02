import { useContext } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../collections/Buttons";
import { darkTheme, lightTheme, ThemeContext } from "../context/ThemeContext";

const Footer = ({ className }) => {

  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme.type === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
  }

  return (
    <footer className={className}>

      <p>Gracias por visitar esta página.</p>
      <PrimaryButton theme={theme} onClick={toggleTheme}>Cambiar tema</PrimaryButton>


    </footer>
  );
}

export default styled(Footer)`

  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;

  button {
    display: inline-block;
  }





`