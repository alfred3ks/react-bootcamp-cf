import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const InnerLayout = styled.div`
  background-color: ${props => (props?.theme?.colors?.background) || "#14213d"};
  color: ${props => (props?.theme?.colors?.text) || "#fff"};
  transition: all 0.3s ease-in;
`;

const Layout = ({ children }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <InnerLayout theme={theme}>{children}</InnerLayout>
  );
}

export default Layout;