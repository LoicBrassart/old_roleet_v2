import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Scenarii from "./pages/Scenarii";
import Groups from "./pages/Groups";
import Contributors from "./pages/Contributors";
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
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
          <Route path="/scenarii" component={Scenarii} />
          <Route path="/groups" component={Groups} />
          <Route path="/contributors" component={Contributors} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}
