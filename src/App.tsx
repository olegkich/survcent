import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Survey from "./Components/Containers/Survey/Survey";
import List from "./Components/Containers/List/List";
import Home from "./Components/Containers/Home/Home";
import MenuToggle from "./Components/Components/MenuToggle/MenuToggle";
import MenuDrawer from "./Components/Components/MenuDrawer/MenuDrawer";

function App() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    console.log(open);
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="App">
      <div className="container">
        <MenuDrawer isOpen={open} />
        <MenuToggle isOpen={open} onToggle={handleToggle} />
        <main className="main">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/survey" exact component={Survey} />
              <Route path="/list" exact component={List} />
            </Switch>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
