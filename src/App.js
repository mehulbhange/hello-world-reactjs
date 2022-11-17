import React from 'react'
import './App.css';
import logo from './assets/img/BL_logo.png'

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor(){
    super();
    this.state ={
      title:'Hello from Bridgelabz'
    }
  }

  onClick = (event) =>{
      console.log("Button clicked!");
      window.open(this.url,"_blank");
  }

  render(){
    return (
      <div className="App">
        <h1> {this.state.title} </h1>
        <img src={logo} onClick={this.onClick}  alt="Bridgelabz logo" />
      </div>
    );
  }

}

export default App;
