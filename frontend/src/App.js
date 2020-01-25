import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import {
  ArticlePage,
  BlogPage,
  CharactersPage,
  ContributorsPage,
  GroupsPage,
  ScenariiPage,
  SheetPage
} from "./pages";
import { Footer, MetaBar, RoleetBar } from "./components";
import { CharacterForm } from "./forms";

export default function App() {
  return (
    <>
      <MetaBar />
      <RoleetBar />
      <div id="Content">
        <Switch>
          <Route exact path="/" component={BlogPage} />
          <Route excat path="/bacasable" component={CharacterForm} />
          <Route path="/blog/:articleId" component={ArticlePage} />
          <Route path="/characters" component={CharactersPage} />
          <Route path="/scenarii" component={ScenariiPage} />
          <Route path="/groups" component={GroupsPage} />
          <Route path="/contributors" component={ContributorsPage} />
          <Route path="/sheet/:sheetId" component={SheetPage} />
        </Switch>
      </div>
      <Footer />
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </>
  );
}
