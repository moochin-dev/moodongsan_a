import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Ranking } from "./routes/Ranking/Ranking";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Ranking />} />
      </Routes>
    </div>
  );
}

export default App;
