import { createContext } from "react";
import articlesFromDevToMock from "../mocks/devto";

// Creamos nuestro contexto:
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  /* Los articulos vienen del mock */
  return (
    <UserContext.Provider value={articlesFromDevToMock}>{children}</UserContext.Provider>
  )
}
