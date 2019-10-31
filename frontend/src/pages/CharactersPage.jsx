import React, { useState, useEffect } from "react";
import Characters from "../components/Characters";
let charData = require("../mockData/characters.json");

export default function CharactersPage() {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    setCharactersData(charData);
  }, []);

  return (
    <>
      <h2>Personnages</h2>
      <Characters data={charactersData} />
    </>
  );
}
