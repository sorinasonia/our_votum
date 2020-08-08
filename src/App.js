import React, { Component } from 'react';
import Home from "./paths/Home";
import './App.css';
import MyHeader  from "./componets/MyHeader";
import 'react-sticky-header/styles.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import ReactStickyHeader from 'react-sticky-header';

class App extends Component {
  render() {
    return (

      <React.Fragment>
        <MyHeader/>
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
          </Switch>
        </Router>
      </React.Fragment>

    )
  }
}

export default App;
