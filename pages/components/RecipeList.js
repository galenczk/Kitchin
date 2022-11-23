// Import dependencies

//Import components
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const recipes = props.recipes;

  // DOM return
  return (
    <ul class="striped">
      {recipes.map((item) => {
        return <Recipe item={item} />;
      })}
    </ul>
  );
}
