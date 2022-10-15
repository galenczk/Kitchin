// Import dependencies
import React from "react";

//Import components
import Ingredient from "./Ingredient";

export default function IngredientList(props) {

  console.log(props.ingredients)
  return (
    <ul>
      {props.ingredients.map((item) =>{
        return(
          <Ingredient item={item}/>
        )
      })}
        
      
    </ul>
  );
}
