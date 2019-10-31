import React, { useState, useEffect } from "react";
import Scenarii from "../components/Scenarii";
let scenData = require("../mockData/scenarii.json");

export default function ScenariiPage() {
  const [scenariiData, setScenariiData] = useState([]);

  useEffect(() => {
    setScenariiData(scenData);
  }, []);

  return (
    <>
      <h2>Scenarii</h2>
      <Scenarii data={scenariiData} />
    </>
  );
}
