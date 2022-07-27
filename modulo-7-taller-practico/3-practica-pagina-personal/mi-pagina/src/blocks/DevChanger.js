import React, { useContext } from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../collections/Buttons';
import { UserContextFetch } from '../contexts/UserContextFetch'

// Creamos este componente que hace que se cuando deseemos cambiar a otra pagina de articulos por ejemplo los de j¡mi empresa:
const DevChanger = ({ className }) => {
  let [user, setUser] = useContext(UserContextFetch);

  const changeUsername = () => {
    const newUsername = user.devToUsername === "ben" ? "microsoft" : "ben";
    setUser(
      {
        ...user,
        devToUsername: newUsername
      })
  }

  return (
    <div className={className}>
      <p>Tambien puedes
        <SecondaryButton onClick={changeUsername}>
          Ver los
          {user.devToUsername === "ben" ? "Ver los de mi trabajo" : "míos"}
        </SecondaryButton>
      </p>
    </div>
  )
}

export default styled(DevChanger)`




`;