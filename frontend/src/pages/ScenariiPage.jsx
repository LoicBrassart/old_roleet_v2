import React, { useState, useEffect } from "react";
import Scenarii from "../components/Scenarii";
import { api } from "../conf";

export default function ScenariiPage() {
  const [scenarii, setScenarii] = useState([]);

  useEffect(() => {
    api
      .get("/scenarii")
      .then(({ data }) => {
        setScenarii(data);
      })
      .catch(error => {
        console.log(
          "We encountered an error while fetching characters, sorry about that"
        );
      });
  }, []);

  return (
    <>
      <h2>Scenarii</h2>
      <Scenarii data={scenarii} />
    </>
  );
}
