import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Survey from './Components/Containers/Survey/Survey';
import SurveyList from './Components/Containers/SurveyList/SurveyList';
import SurveyCreator from './Components/Containers/SurveyCreator/SurveyCreator';
import Home from './Components/Containers/Home/Home';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/survey' exact component={Survey}/>
            <Route path='/list' exact component={SurveyList}/>
            <Route path='/create' exact component={SurveyCreator}/>            
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
