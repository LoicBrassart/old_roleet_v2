import React from "react";
import { NwodWerewolves } from "./sheets";

import "./styles/Sheet.scss";

export function Sheet({ game, data }) {
  return (
    <div className="Sheet">
      {game === "New World of Darkness | Werewolves: the Forsaken" && (
        <NwodWerewolves data={data} />
      )}
    </div>
  );
}
