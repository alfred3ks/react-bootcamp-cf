/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

// Creamos un objeto del usuario:
const userContext = {
  devToUsername: 'uriel_hedz',
  articlesFromDevTo: []
}

// Creamos nuestro contexto:
export const UserContextObject = createContext();

export const UserProviderObject = ({ children }) => {

  // Necesitamos implementar un estado:
  const [user, setUser] = useState(userContext);

  // Implementamos la llamada a la API: Tenemos que usar useEffect():
  useEffect(() => {
    async function fetchDevTo() {
      const response = await fetch("https://dev.to/api/articles?username=uriel_hedz")
      const articles = await response.json();
      console.log(articles);
      setUser({ ...user, articlesFromDevTo: articles });
    }
    fetchDevTo();
  }, [])

  return (
    <UserContextObject.Provider value={user}>{children}</UserContextObject.Provider>
  )
}
