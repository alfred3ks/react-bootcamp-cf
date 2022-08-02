import { createContext, useEffect, useState } from "react";

// Creamos nuestro contexto:
export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // Necesitamos implementar un estado:
  const [articlesFromDevTo, setArticlesFromDevTo] = useState([]);

  // Implementamos la llamada a la API: Tenemos que usar useEffect():
  useEffect(() => {
    async function fetchDevTo() {
      const response = await fetch("https://dev.to/api/articles?username=uriel_hedz")
      const articles = await response.json();
      setArticlesFromDevTo(articles);
    }
    fetchDevTo();
  }, [])

  return (
    <UserContext.Provider value={articlesFromDevTo}>{children}</UserContext.Provider>
  )
}
