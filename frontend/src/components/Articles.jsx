import React from "react";
import Article from "./Article";
import "./styles/Articles.scss";

export default function Articles({ data }) {
  return (
    <div className="Articles">
      {data
        .filter((article, i) => {
          return (
            article.tags.includes("Roleet") || article.tags.includes("Blog")
          );
        })
        .map((article, i) => {
          return <Article key={i} {...article} />;
        })}
    </div>
  );
}
