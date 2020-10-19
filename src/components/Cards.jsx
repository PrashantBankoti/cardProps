import React from "react";
import Image from "./Image";
import Details from "./Details";

function Cards(props){
   return(
    <div>
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Image imgURL={props.imgURL} />
        
      </div>
      <div className="bottom">
      <Details 
          newInfo ={props.phone}
      />
      <Details 
           newInfo ={props.email}
      />
      </div>

     
     

    </div>
  </div>
   )

}

export default Cards;
