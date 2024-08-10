import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component{

 constructor(props) {
   super(props)
 
   this.state = {
      voitures : [
      {name:'Ford',color:'red',year:2000},
      {name:'BMW',color:'black',year:2012},
      {name:'Golf',color:'green',year:2017},
    ],

    titre :'Mon catalogue voitures 2'
   }
  }

  noCopy = () =>{
    alert('merci de ne pas copier le texte')
  }

  //add style sur h1
  addStyle =(e) =>{
     if(e.target.classList.contains('styled')) {
        e.target.classList.add('styled')
     }else{
      e.target.classList.add('styled')
     }
  }


  addTenYears =()=>{
    const updateSate = this.state.voitures.map((param)=>{
      return param.year -=10;
    })
    
    this.setState({
      updateSate
    })
 
  }
    render(){

      const year = new Date().getFullYear();

        return(
           <div>
              <h1>{this.state.titre}</h1>
              <button onClick={this.addTenYears}>+ 10 ans</button>
            {/* <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}


             {
              this.state.voitures.map((voiture,index) =>{
                return (
                  <div key={index}>
                      <Car color={voiture.color} year={year - voiture.year  +' ans'} nom={voiture.name}/>
                  </div>
                   )
              })
             }
           </div>

        );
    }
}

export default Mycars;