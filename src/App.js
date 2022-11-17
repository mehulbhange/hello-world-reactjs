import React from 'react'
import './App.css';
import logo from './assets/img/BL_logo.png'

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor(){
    super();
    this.state ={
      userName:''
    }
  }

  onClick = (event) =>{
      console.log("Button clicked!");
      window.open(this.url,"_blank");
  }

  onInputChange = (event) =>{
    this.setState({
      userName: event.target.value,
    })
  }

  render(){
    return (
      <div className="App">
        <h1> Hello {this.state.userName} from Bridgelabz </h1>
        <img src={logo} onClick={this.onClick}  alt="Bridgelabz logo" />
        <div>
          <input onChange={this.onInputChange} />
        </div>
      </div>
    );
  }

}

export default App;
