// Import dependencies

//Import components
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const recipes = props.recipes;
  let names = []
  for (let item of recipes){
    names.push(item.title)
  }

  // DOM return
  return (
    <ul class="striped">
      {names.map((item) => {
        return <Recipe item={item} />;
      })}
    </ul>
  );
}
