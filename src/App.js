import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./route/Home";
import Registry from "./route/Registry";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
