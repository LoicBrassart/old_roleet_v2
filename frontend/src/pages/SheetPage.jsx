import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { api } from "../conf";
import Sheet from "../components/Sheet";

export function SheetPage() {
  const { sheetId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    api
      .get(`/sheets/${sheetId}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        toast.error(
          "We encountered an error while fetching yout sheet, sorry about that"
        );
      });
  }, [sheetId]);

  return <Sheet game={data.gameSystem} data={data} />;
}
