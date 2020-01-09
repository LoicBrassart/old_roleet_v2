import React from "react";
import "./styles/Article.scss";

export default function Article({ title }) {
  return (
    <article className="Article">
      <h4>{title}</h4>
    </article>
  );
}
