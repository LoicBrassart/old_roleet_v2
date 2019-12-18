import React from "react";
import Character from "./Character";

import "./styles/Characters.scss";

export default function Characters({ data }) {
  return (
    <div className="Characters">
      {data.map((char, i) => {
        return <Character key={i} {...char} />;
      })}
    </div>
  );
}
