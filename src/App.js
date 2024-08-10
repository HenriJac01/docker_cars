import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {
  
  //State sur Mycars en dessous
  state ={
    titre : "Mon catalogue voitures"
  }

  //Changer titre en dur
  changeTitle = (e) =>{
    this.setState({
      titre:'Mon nouveau titre'
    })
  }

  //Changer titre with param
  changeViaParam =(titre) =>{
    this.setState({
      titre : titre
    })
  }

  //Changer titre with bind
  changeViaBind=(param)=>{
    this.setState({
      titre:param
    })
  }

  //Changer input onChange
  changeInput=(e)=>{
    this.setState({
      titre:e.target.value
    })


  }

  render(){
    return (
      <div className="App">
        <Mycars/> 
        {/* <button onClick={this.changeTitle}>Changer le nom </button>
        <button onClick={()=> this.changeViaParam('Titre via un param')}>Via param </button>
        <button onClick={this.changeViaBind.bind(this,'Titre via bind')}>Via bind </button>
        <input type="text" onChange={this.changeInput}  value={this.state.titre}/> */}
      </div>
    );

  }
 
}

export default App;
