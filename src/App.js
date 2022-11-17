import React from 'react'
import './App.css';
import logo from './assets/img/BL_logo.png'

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor(){
    super();
    this.state ={
      userName:'',
      nameError:'',
    }
  }

  onClick = (event) =>{
      console.log("Button clicked!");
      window.open(this.url,"_blank");
  }

  onInputChange = (event) =>{
    
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(nameRegex.test(event.target.value)){
      this.setState({
        userName:event.target.value,
        nameError:''
      })
    }else{
      this.setState({
        nameError:"Invalid name"
      })
    }

  }

  render(){
    return (
      <div className="App">
        <h1> Hello {this.state.userName} from Bridgelabz </h1>
        <img src={logo} onClick={this.onClick}  alt="Bridgelabz logo" />
        <div>
          <input onChange={this.onInputChange} />
          <span className='error-output'> {this.state.nameError} </span>
        </div>
      </div>
    );
  }

}

export default App;
