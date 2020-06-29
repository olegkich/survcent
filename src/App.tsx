import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuDrawer from "./Components/MenuDrawer/MenuDrawer";
import MenuToggle from "./Components/MenuToggle/MenuToggle";
import Home from "./Components/Home/Home";
import Survey from "./Components/SurveyView/SurveyView";
import List from "./Components/SurveyList/SurveyList";
import SurveyCreator from "./Components/SurveyCreator/SurveyCreator";

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
              <Route path="/create" exact component={SurveyCreator} />
            </Switch>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
