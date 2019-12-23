import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { api } from "../conf";
import Sheet from "../components/Sheet";

export default function SheetPage() {
  const { sheetId } = useParams();
  const [game, setGame] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get(`/sheets/${sheetId}`)
      .then(({ data }) => {
        setGame(data.gameSystem);
        setData(data);
      })
      .catch(error => {
        toast.error(
          "We encountered an error while fetching yout sheet, sorry about that"
        );
      });
  }, [sheetId]);

  return (
    <>
      <Sheet game={game} data={data} />
    </>
  );
}
