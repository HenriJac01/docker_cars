import React from "react";

const Car = ({nom,color,year}) =>{
    console.log(nom)

    const colorInfo = color ? (  <p>Couleur: { color }</p>) : (  <p>Couleur: Néant</p>);
    if(nom){
        return(
            <div style={{
                backgroundColor:'pink',
                width:'400px',
                margin:'5px auto',
                padding:'10px'
                
            }}>
                 <p>Marque: { nom }</p>
                  { colorInfo } 
                 <p>Age: { year }</p> 
              
            </div>
        )
    }else{
        return null;
  
    }

}

export default Car;

