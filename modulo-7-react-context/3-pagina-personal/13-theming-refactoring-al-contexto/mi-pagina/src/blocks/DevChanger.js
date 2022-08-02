import { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../collections/Buttons";
import { UserContextObject } from "../context/UserContextObject";

const DevChanger = ({ className }) => {
  const [user, setUser] = useContext(UserContextObject);

  const changeUsername = () => {
    const newUsername = user.devToUsername === "uriel_hedz" ? "microsoft" : "uriel_hedz";
    setUser({ ...user, devToUsername: newUsername })
  }

  return (
    <div className={className}>
      <p>Tambien puedes cambiar a los articulos:
        <SecondaryButton
          onClick={changeUsername}>
          {user.devToUsername === "uriel_hedz" ? "de mi trabajo" : "mios"}
        </SecondaryButton>
      </p>
    </div>
  );
}

export default styled(DevChanger)`




`