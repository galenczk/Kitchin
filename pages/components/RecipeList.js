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
      <table class="min-w-full">
        <thead>
          <tr className="bg-slate-600 text-white">
            <th className="p-4 border-x-slate-800 border-x-2 border-l-slate-600 text-start">Recipe</th>
            <th className="p-4 border-x-slate-800 border-x-2">Ready In</th>
            <th className="p-4 border-x-slate-800 border-x-2">
              Missing <br /> Ingredients
            </th>
            <th className="p-4 border-x-slate-800 border-x-2 border-r-slate-600">Servings</th>
            <th className="p-4 border-x-slate-800 border-x-2 border-r-slate-600"></th>
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
