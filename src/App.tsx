import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuDrawer from "./Components/UI/MenuDrawer/MenuDrawer";
import MenuToggle from "./Components/UI/MenuDrawer/MenuToggle/MenuToggle";
import Home from "./Components/Home/Home";
import Survey from "./Components/Survey/Survey";
import List from "./Components/List/List";
import Create from "./Components/Create/Create";
import Signup from "./Components/Home/Signup/Signup";
import Login from "./Components/Home/Login/Login";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main className="main">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/survey" exact component={Survey} />
              <Route path="/list" exact component={List} />
              <Route path="/create" exact component={Create} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
