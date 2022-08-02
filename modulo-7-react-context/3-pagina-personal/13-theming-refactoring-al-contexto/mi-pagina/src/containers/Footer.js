import { useContext } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../collections/Buttons";
import { ThemeContext } from "../context/ThemeContext";

const Footer = ({ className }) => {

  const [theme, toggleTheme] = useContext(ThemeContext);



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