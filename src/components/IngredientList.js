// Import dependencies
import React from "react";

//Import components
import Ingredient from "./Ingredient";

export default function IngredientList(props) {

  const ingredients = props.ingredients

  return (
    <ul
      class="striped"
    >
      {ingredients.map((item) => {
        return <Ingredient item={item} onDelete={props.onDelete} />;
      })}
    </ul>
  );
}
