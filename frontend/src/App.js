import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import ScenariiPage from "./pages/ScenariiPage";
import GroupsPage from "./pages/GroupsPage";
import ContributorsPage from "./pages/ContributorsPage";
import MetaBar from "./components/MetaBar";
import RoleetBar from "./components/RoleetBar";
import Footer from "./components/Footer";
import SheetPage from "./pages/SheetPage";

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
          <Route path="/sheet/:sheetId" component={SheetPage} />
        </Switch>
      </div>
      <Footer />
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
    </>
  );
}
