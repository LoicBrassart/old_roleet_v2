import React from "react";
import { NwodWerewolves } from "./sheets";

import "./styles/Sheet.scss";

export function Sheet({ game, data }) {
  return (
    <div className="Sheet">
      {game === "Loups-Garous : les Déchus" && <NwodWerewolves data={data} />}
    </div>
  );
}
