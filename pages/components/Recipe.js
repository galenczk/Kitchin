// Import dependencies
import { GiCook } from "react-icons/gi";
import { useRouter } from "next/router"


export default function Recipe(props) {
  
  const router = useRouter();
  const recipe = props.item;

  // Handles readyInTime property of recipe
  let time = recipe.readyInMinutes;
  let timePostfix = "Minutes";
  if (time > 60) {
    timePostfix = "Hour";
    time = Math.round(time / 60);
    if (time > 1) {
      timePostfix = "Hours";
    }
  }
  // DOM return
  return (
    <>
      <tr class="text-center odd:bg-slate-200 border-2 border-x-white odd:border-x-slate-200 border-y-slate-600">
        <td className="p-2  text-start">{recipe.title}</td>
        <td className="p-2  text-center">
          {time} {timePostfix}
        </td>
        <td className="p-2  text-center">{recipe.missedIngredientCount}</td>
        <td className="text-center ">{recipe.servings}</td>
        <td className=" text-center">
          <button
            className="btn-small btn-chef border-l-4 border-emerald-600"
            onClick={() => {
              router.push(`${props.index}`);
            }}
          >
            {<GiCook size="40" />}
          </button>
        </td>
      </tr>
    </>
  );
}
