import React from "react";
import "./App.scss";
import MetaBar from "./components/MetaBar";
import RoleetBar from "./components/RoleetBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <MetaBar />
      <RoleetBar />
      <div id="Content">Content</div>
      <Footer />
    </>
  );
}
