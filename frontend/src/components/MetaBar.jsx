import React from "react";
import { useSelector } from "react-redux";
import Modali, { useModali } from "modali";
import ConnectionForm from "../forms/ConnectionForm";
import "./styles/MetaBar.scss";

export default function MetaBar() {
  const user = useSelector(state => state.user);
  const [loginModal, toggleLoginModal] = useModali({
    title: "Connection: Are you sure?"
  });
  return (
    <>
      <nav id="MetaBar" className="flexer">
        <div>Meta</div>
        {user.loggedIn ? (
          `Hello ${user.name}`
        ) : (
          <button
            onClick={() => {
              toggleLoginModal();
            }}
          >
            Connexion
          </button>
        )}
      </nav>

      <Modali.Modal {...loginModal}>
        <ConnectionForm loginCb={toggleLoginModal} />
      </Modali.Modal>
    </>
  );
}
