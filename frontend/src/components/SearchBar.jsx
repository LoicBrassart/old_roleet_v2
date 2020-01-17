import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/SearchBar.scss";
import { api } from "../conf";

const icons = ["ಠ_ಠ", "( ͠° ͟ʖ ͠°)", "(v°_°v)", "¬_¬", "(；⌣̀_⌣́)"];
function NoResult() {
  const numIcon = Math.floor(Math.random() * icons.length);
  return (
    <li className="NoResult">
      <h5>{icons[numIcon]}</h5>
      <p>
        Désolé, on a <br />
        rien trouvé !
      </p>
    </li>
  );
}

function SearchResults({ users, chars, scenarii }) {
  return (
    <div id="SearchResults" className="flexer">
      <section className="item">
        <h4>Personnages</h4>
        <ul>
          {chars.map((char, idx) => {
            return (
              <li key={idx}>
                <Link to={`/character/${char._id}`}>{char.name}</Link>
              </li>
            );
          })}
          {chars.length ? <></> : <NoResult />}
        </ul>
      </section>
      <section className="big-item">
        <h4>Scenarii</h4>
        <ul>
          {scenarii.map((scen, idx) => {
            return (
              <li key={idx}>
                <Link to={`/scenarii/${scen._id}`}>{scen.title}</Link>
              </li>
            );
          })}
          {scenarii.length ? <></> : <NoResult />}
        </ul>
      </section>
      <section className="item">
        <h4>Rolistes</h4>
        <ul>
          {users.map((user, idx) => {
            return (
              <li key={idx}>
                <Link to={`/users/${user._id}`}>{user.pseudo}</Link>
              </li>
            );
          })}
          {users.length ? <></> : <NoResult />}
        </ul>
      </section>
    </div>
  );
}

export function SearchBar() {
  const [needle, setNeedle] = useState("");
  const [chars, setChars] = useState([]);
  const [scenarii, setScens] = useState([]);
  const [users, setUsers] = useState([]);
  const [lastCall, setLastCall] = useState(Date.now());

  const fetchData = needle => {
    api.get("/characters").then(({ data }) => {
      setChars(
        data.filter(char => {
          return (
            char.name
              .trim()
              .toLowerCase()
              .indexOf(needle) !== -1
          );
        })
      );
    });
    api.get("/users").then(({ data }) => {
      setUsers(
        data.filter(user => {
          return (
            user.pseudo
              .trim()
              .toLowerCase()
              .indexOf(needle) !== -1
          );
        })
      );
    });
    api.get("/scenarii").then(({ data }) => {
      setScens(
        data.filter(scen => {
          return (
            scen.title
              .trim()
              .toLowerCase()
              .indexOf(needle) !== -1
          );
        })
      );
    });
  };

  useEffect(() => {
    if (!needle) return;
    if (Date.now() - lastCall < 200) return;
    fetchData(needle);
    setLastCall(Date.now());
  }, [needle, lastCall]);

  return (
    <li id="SearchBar" className="center">
      <form action="" autoComplete="on">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Cherche un personnage, scenario, joueur, ..."
          value={needle}
          onChange={e => {
            setNeedle(e.target.value);
          }}
          onBlur={e => {
            // This timeout is needed, otherwise the results disappear
            // before the click on it is taken into account
            // TODO: Find why, and fix it
            setTimeout(() => {
              setNeedle("");
            }, 200);
          }}
        />
        <input id="search_submit" value="" type="submit" />
      </form>
      {needle && (
        <SearchResults users={users} chars={chars} scenarii={scenarii} />
      )}
    </li>
  );
}
