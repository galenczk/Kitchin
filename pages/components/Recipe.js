// Import dependencies
import { GiCook, GiOpenBook } from "react-icons/gi";
import { useRouter } from "next/router"

// Import componenets

export default function Recipe(props) {

  const router = useRouter() 

  const recipe = props.item;  
  // Handles readyInTime
  let time = recipe.readyInMinutes;
  let timePostfix = "Minutes";
  if (time > 60) {
    timePostfix = "Hour";
    time = Math.round(time / 60);
    if (time > 1) {
      timePostfix = "Hours"
    }
  }
  
  return (
    <>
      <tr class="text-start border-4">
        <td className="p-2 border-2">{recipe.title}</td>
        <td className="p-2 border-2 ">
          {time} {timePostfix}
        </td>
        <td className="p-2 border-2 text-center">{recipe.missedIngredientCount}</td>
        <td className="text-center border-2">{recipe.servings}</td>
        <td className="text-center">
          <button
            className="btn-chef btn"
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
