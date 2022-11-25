// Import dependencies

//Import components
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const recipes = props.recipes;
  let titleArray = []
  for (let item of recipes){
    titleArray.push(item.title)
  }

  // DOM return
  return (
    <ul class="striped">
      {titleArray.map((item) => {
        return <Recipe item={item} />;
      })}
    </ul>
  );
}
