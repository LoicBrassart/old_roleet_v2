import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Scenarii } from "../components";
import { api } from "../conf";

export function ScenariiPage() {
  const [scenarii, setScenarii] = useState([]);

  useEffect(() => {
    api
      .get("/scenarii")
      .then(({ data }) => {
        setScenarii(data);
      })
      .catch(error => {
        toast.error(
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
