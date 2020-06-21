import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Survey from './Components/Containers/Survey/Survey';
import SurveyList from './Components/Containers/SurveyList/SurveyList';
import SurveyCreator from './Components/Containers/SurveyCreator/SurveyCreator';
import Home from './Components/Containers/Home/Home';
import MenuToggle from './Components/Presenters/MenuToggle/MenuToggle';
import MenuDrawer from './Components/Presenters/MenuDrawer/MenuDrawer';

function App() {

  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    console.log(open)
    setOpen(!open)
    console.log(open)
  }

  return (
    <div className="App">
      <div className='container'>
      <MenuDrawer isOpen={open}/>
      <MenuToggle isOpen={open} onToggle={handleToggle}/>
        <main className='main'>
          <Router>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/survey' exact component={Survey}/>
              <Route path='/list' exact component={SurveyList}/>
              <Route path='/create' exact component={SurveyCreator}/>            
            </Switch>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
