import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Characters from "../components/Characters";
import { api } from "../conf";

export function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get("/characters")
      .then(({ data }) => {
        setCharacters(data);
      })
      .catch(error => {
        toast.error(
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
