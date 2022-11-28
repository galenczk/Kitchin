// Import dependencies

//Import components
import Ingredient from "./Ingredient";

export default function IngredientList(props) {
  const ingredients = props.ingredients;

  //DOM return
  return (
    <>
      <table className="min-w-full">
        <thead>
          <tr className="bg-slate-600 text-white">
            <th className="p-4 border-r-slate-800 border-x-2 border-l-slate-600 text-start ">Ingredient</th>
            <th className="w-16 p-4 border-r-slate-600 border-x-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((item, key) => {
            return <Ingredient item={item} key={key} onDelete={props.onDelete} />;
          })}
        </tbody>
      </table>
    </>
  );
}
