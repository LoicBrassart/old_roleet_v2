import React from "react";
import Character from "./Character";

export default function Characters({ data }) {
  return data.map((char, i) => {
    return <Character key={i} {...char} />;
  });
}
