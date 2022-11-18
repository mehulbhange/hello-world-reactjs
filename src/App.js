import React from 'react'
import './App.css';
import logo from './assets/img/BL_logo.png'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';


class App extends React.Component {
  
  render(){
    return (
      <div className="App">        

        <Router>
          <Switch>
            <Route path="/home" ><Home /></Route>
          </Switch>
        </Router>

      </div>
    );
  }

}

export default App;
