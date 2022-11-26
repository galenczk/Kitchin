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
    <>
      <table class="table-auto border-4">
        <thead>
          <tr className="border-4">
            <th className="border-2">Recipe</th>
            <th className="border-2">Ready In</th>
            <th className="p-2 border-2">
              Missed <br /> Ingredients
            </th>
            <th>Servings</th>
            <th className="p-2 border-2">Let's Have That!</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((item, index) => {
            return <Recipe item={item} index={index} />;
          })}
        </tbody>
      </table>
    </>
  );
}
