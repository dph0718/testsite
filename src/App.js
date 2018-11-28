import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Importing components
import FolioPage from "./pages/FolioScreen"
import HomePage from './pages/HomePage';
import PullDownBar from './components/PullDownBar'

//Importing functions

//Importing Data
import pullDownOptions from './data/pullDownOptions'

class App extends Component {

  state = {
  }
  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <PullDownBar 
            options={pullDownOptions}/>
            <Switch>
              <Route exact path="(/|/home)" component={HomePage} />
              <Route exact path="/portfolio" component={FolioPage} />
            </Switch></div>
        </Router>
      </div>
    );
  }
}

export default App;
