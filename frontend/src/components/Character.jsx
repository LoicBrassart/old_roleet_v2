import React, { useState } from "react";
import "./styles/Character.scss";
import Badge from "./Badge";

const FluffsTab = ({ fluffs }) => (
  <article className="descriptionArticle articleSelected">
    {fluffs.map((fluff, i) => {
      return (
        <React.Fragment key={i}>
          <h3>{fluff.title}</h3>
          <p>{fluff.content}</p>
        </React.Fragment>
      );
    })}
  </article>
);

const SheetsTab = ({ sheets }) => (
  <article className="sheetsArticle articleSelected">
    <ul className="systems">
      {sheets.map((sheet, i) => {
        return (
          <Badge
            key={i}
            imgPath={`/img/gamesystems/${sheet.gameSystemImg}`}
            linkTo={`/sheet/${sheet.sheet}`}
            imgAlt={sheet.gameSystem}
          />
        );
      })}
    </ul>
  </article>
);

export default function Character({
  avatar,
  name,
  baseline,
  tags,
  fluffs,
  characterSheets
}) {
  const [currentTab, changeTab] = useState("fluffs");

  return (
    <section className="Character">
      <img src={avatar} alt={name} />
      <article>
        <h2>{name}</h2>
        <p>{baseline}</p>
        <aside>
          {tags.map((tag, i) => {
            return <span key={i}>{tag}</span>;
          })}
        </aside>
      </article>

      <aside>
        <nav>
          <button
            type="button"
            className={`${
              currentTab === "fluffs" ? "buttonSelected" : ""
            } descriptionButton cardButton`}
            onClick={() => {
              changeTab("fluffs");
            }}
          >
            Description
          </button>
          <button
            type="button"
            className={`${
              currentTab === "sheets" ? "buttonSelected" : ""
            } sheetsButton cardButton`}
            onClick={() => {
              changeTab("sheets");
            }}
          >
            Sheets
          </button>
        </nav>

        {currentTab === "fluffs" ? (
          <FluffsTab fluffs={fluffs} />
        ) : (
          <SheetsTab sheets={characterSheets} />
        )}
      </aside>
    </section>
  );
}
