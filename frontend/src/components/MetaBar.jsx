import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modali, { useModali } from "modali";
import "./styles/MetaBar.scss";

export default function MetaBar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [loginModal, toggleLoginModal] = useModali({
    title: "Are you sure?",
    message: "Maybe you won't like the fake user we chose for you !",
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleLoginModal()}
      />,
      <Modali.Button
        label="Become Rolist"
        isStyleDestructive
        onClick={() => {
          dispatch({ type: "LOGIN_MOCK_USER" });
          toggleLoginModal();
        }}
      />,
      <Modali.Button
        label="Become Master"
        isStyleDestructive
        onClick={() => {
          dispatch({ type: "LOGIN_MOCK_ADMIN" });
          toggleLoginModal();
        }}
      />
    ]
  });
  return (
    <>
      <nav id="MetaBar" className="flexer">
        <div>Meta</div>
        <button
          onClick={() => {
            if (user.loggedIn) {
              dispatch({ type: "LOGIN_LOGOUT" });
            } else {
              toggleLoginModal();
            }
          }}
        >
          {user.loggedIn ? `Log ${user.name} out` : "Connexion"}
        </button>
      </nav>

      <Modali.Modal {...loginModal} />
    </>
  );
}
