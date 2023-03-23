import React from "react";
import "./App.css";
import { Category } from "./components/ranking/Category/Category";
import { Scope } from "./components/ranking/Scope/Scope";

function App() {
  return (
    <div className="App">
      <Category />
      <Scope />
    </div>
  );
}

export default App;
