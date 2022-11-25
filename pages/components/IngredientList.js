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
            <th className="">Ingredient</th>
            
            <th></th>
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
