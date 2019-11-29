import React from "react";
import "./styles/SearchBar.scss";

export default function SearchBar() {
  return (
    <li id="SearchBar" className="center">
      <form action="" autocomplete="on">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Cherche un personnage, scenario, joueur, ..."
        />
        <input id="search_submit" value="Rechercher" type="submit" />
      </form>
    </li>
  );
}
