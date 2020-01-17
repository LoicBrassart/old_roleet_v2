import React from "react";
import { Character } from ".";

import "./styles/Characters.scss";

export function Characters({ data }) {
  return (
    <div className="Characters">
      {data.map((char, i) => {
        return <Character key={i} {...char} />;
      })}
    </div>
  );
}
