import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modali, { useModali } from "modali";
import { LoginForm } from "../forms";
import "./styles/MetaBar.scss";

export function MetaBar() {
  const user = useSelector(state => state.user);
  const [formToDisplay, setFormToDisplay] = useState("connection");
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
        {formToDisplay === "connection" && (
          <>
            <LoginForm loginCb={toggleLoginModal} />
            <span
              onClick={() => {
                setFormToDisplay("signup");
              }}
            >
              Pas encore inscrit ?
            </span>
            <span
              onClick={() => {
                setFormToDisplay("forgottenPassword");
              }}
            >
              J'ai oublié mon mot de passe...
            </span>
          </>
        )}
        {formToDisplay === "signup" && (
          <>
            <p>INSERT SIGNUP HERE</p>
            <span
              onClick={() => {
                setFormToDisplay("connection");
              }}
            >
              J'ai déjà un compte !
            </span>
          </>
        )}
        {formToDisplay === "forgottenPassword" && (
          <>
            <p>INSERT FORGOTPASSWORD HERE</p>
            <span
              onClick={() => {
                setFormToDisplay("connection");
              }}
            >
              Ah, nan, je l'ai !
            </span>
          </>
        )}
      </Modali.Modal>
    </>
  );
}
