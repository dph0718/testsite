import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Importing Pages
import FolioPage from "./pages/FolioScreen"
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

//Importing Components
import PullDownBar from './components/PullDownBar'

//Importing Data
import pullDownOptions from './data/pullDownOptions'

class App extends Component {

  componentDidMount(){console.log('App mounted.')}
  state = {
  }
  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <PullDownBar 
            options={pullDownOptions}/>
            {console.log(' USING AN IMPORT. geez.')}
            <Switch>
              {/* when deploying to GitHub Pages, PUBLIC_URL is required to deploy to the url */}
              {/* if you use the repo name in _here_, it won't work on a dev server.*/}
              <Route exact path={process.env.PUBLIC_URL + '(/|/home)'} component={HomePage} />
              <Route exact path={process.env.PUBLIC_URL + '/portfolio'} component={FolioPage} />
              <Route exact path={process.env.PUBLIC_URL + '/contact'} component={ContactPage} />
            </Switch></div>
        </Router>
      </div>
    );
  }
}

export default App;
