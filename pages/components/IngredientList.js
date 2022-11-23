// Import dependencies

//Import components
import Ingredient from "./Ingredient";

export default function IngredientList(props) {

  const ingredients = props.ingredients 

  //DOM return
  return (
    <ul
      class="striped"
    >
      {ingredients.map((item, key) => {
        return <Ingredient item={item} key={key} onDelete={props.onDelete} />;
      })}
    </ul>
  );
}
