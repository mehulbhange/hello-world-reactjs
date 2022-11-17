import React from 'react'
import './App.css';
import logo from './assets/img/BL_logo.png'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      title:'Hello from Bridgelabz'
    }
  }
  render(){
    return (
      <div className="App">
        <h1> {this.state.title} </h1>
        <img src={logo}  alt="Bridgelabz logo" />
      </div>
    );
  }

}

export default App;
