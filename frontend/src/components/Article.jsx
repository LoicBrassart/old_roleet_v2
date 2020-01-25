import React from "react";
import "./styles/Article.scss";

export function Article({ title }) {
  return (
    <article className="Article">
      <h4>{title}</h4>
    </article>
  );
}
