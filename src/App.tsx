import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Ranking } from "./routes/Ranking/Ranking";
import { Price } from "./routes/Price/Price";
import { Chart } from "./routes/Chart/Chart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"ranking"} element={<Ranking />} />
        <Route path={"chart"} element={<Chart />} />
        <Route path={"price"} element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
