import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SurveyView from "./Components/Containers/SurveyView/SurveyView";
import SurveyList from "./Components/Containers/SurveyList/SurveyList";
import Home from "./Components/Containers/Home/Home";
import MenuToggle from "./Components/Components/MenuToggle/MenuToggle";
import MenuDrawer from "./Components/Components/MenuDrawer/MenuDrawer";
import SurveyCreator from "./Components/Containers/SurveyCreator/SurveyCreator";

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
              <Route path="/survey" exact component={SurveyView} />
              <Route path="/list" exact component={SurveyList} />
              <Route path="/create" exact component={SurveyCreator} />
            </Switch>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
