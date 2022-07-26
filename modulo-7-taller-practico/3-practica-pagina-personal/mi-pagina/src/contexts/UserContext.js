// En context vamos a tener todos los articulos no de mocks:
import { createContext } from "react";

import articlesFromDevToMock from '../mocks/devto';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={articlesFromDevToMock}>
      {children}
    </UserContext.Provider>
  )

}
