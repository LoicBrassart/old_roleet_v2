import React from "react";
import "./styles/RoleetBar.scss";

export default function RoleetBar() {
  return (
    <nav id="RoleetBar">
      <div className="logo center">
        <div>
          <img src="img/logo.svg" alt="" />
          <h1>Roleet</h1>
        </div>
        <p>May the Dice be with you !</p>
      </div>
      <ul className="flexer">
        <li className="center">SearchOverWebsite</li>
        <li className="center">Personnages</li>
        <li className="center">Scenarii</li>
        <li className="center">Groupes</li>
        <li className="center">
          <img src="img/user-avatar-default.png" alt="Mon compte Roleet" />
        </li>
      </ul>
    </nav>
  );
}
