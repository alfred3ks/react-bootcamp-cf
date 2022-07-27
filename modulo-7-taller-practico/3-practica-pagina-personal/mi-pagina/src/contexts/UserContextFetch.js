// En context vamos a tener todos los articulos no de mocks:
import { createContext } from "react";
import { useEffect, useState } from "react";

export const UserContextFetch = createContext();

export const UserProvider = ({ children }) => {
  // devToUsername: "uriel_hedz"

  // Valor por defecto de useContext: Antes era un arreglo vacio:
  // Aqui ponemos nuestro usuario de devto:
  const userContext = {
    devToUsername: "ben",
    articlesFromDevTo: []
  }

  // Vamos a implementar fetch(): Tenemos el estado
  // let [articlesFromDevTo, setArticlesFromDevTo] = useState([]);
  let [user, setUser] = useState(userContext);

  // Vamos a implementar fetch():
  useEffect(() => {

    // Consulta a la API, al producir un efecto secundario va dentro se usaEffect: Siempre va asi.
    async function fetchDevTo() {
      const response = await fetch('https://dev.to/api/articles?username=' + user.devToUsername)
      console.log(response);
      const articles = await response.json();
      setUser({
        ...user,
        articlesFromDevTo: articles
      });
    }

    fetchDevTo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.devToUsername]);

  return (
    <UserContextFetch.Provider value={[user, setUser]}> {/* valor del contexto */}
      {children}
    </UserContextFetch.Provider>
  )

}
