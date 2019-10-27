import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/RoleetBar.scss";

export default function RoleetBar() {
  return (
    <nav id="RoleetBar">
      <div className="logo center">
        <Link to="/">
          <div>
            <img src="img/logo.svg" alt="" />
            <h1>Roleet</h1>
          </div>
          <p>May the Dice be with you !</p>
        </Link>
      </div>
      <ul className="flexer">
        <li className="center">SearchOverWebsite</li>
        <li className="center">
          <NavLink to="/characters" activeClassName="active">
            Personnages
          </NavLink>
        </li>
        <li className="center">
          <NavLink to="/scenarii">Scenarii</NavLink>
        </li>
        <li className="center">
          <NavLink to="/groups">Groupes</NavLink>
        </li>
        <li className="center">
          <img src="img/user-avatar-default.png" alt="Mon compte Roleet" />
        </li>
      </ul>
    </nav>
  );
}
