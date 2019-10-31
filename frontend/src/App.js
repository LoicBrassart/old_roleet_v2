import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import ScenariiPage from "./pages/ScenariiPage";
import GroupsPage from "./pages/GroupsPage";
import ContributorsPage from "./pages/ContributorsPage";
import MetaBar from "./components/MetaBar";
import RoleetBar from "./components/RoleetBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <MetaBar />
      <RoleetBar />
      <div id="Content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/characters" component={CharactersPage} />
          <Route path="/scenarii" component={ScenariiPage} />
          <Route path="/groups" component={GroupsPage} />
          <Route path="/contributors" component={ContributorsPage} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
