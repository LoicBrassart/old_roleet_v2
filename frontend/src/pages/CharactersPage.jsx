import React, { useState, useEffect } from "react";
import Characters from "../components/Characters";
import { api } from "../conf";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get("/characters")
      .then(({ data }) => {
        setCharacters(data);
      })
      .catch(error => {
        console.log(
          "We encountered an error while fetching characters, sorry about that"
        );
      });
  }, []);

  return (
    <>
      <h2>Personnages</h2>
      <Characters data={characters} />
    </>
  );
}
