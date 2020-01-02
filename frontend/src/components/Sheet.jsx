import React from "react";
import NwodWerewolves from "./sheets/NwodWerewolves";

import "./styles/Sheet.scss";

export default function Sheet({ game, data }) {
  return (
    <div className="Sheet">
      {game === "Loups-Garous : les Déchus" && <NwodWerewolves data={data} />}
    </div>
  );
}
