// Import dependencies
import { MdDelete } from "react-icons/md"

// Import componenets

export default function Ingredient(props) {
  return (
    <>
      <tr className="text-start odd:bg-slate-200 border-2 border-x-white odd:border-x-slate-200 border-y-slate-600">
        <td className="p-4">{props.item}</td>

        <td className="text-center">
          <button
            class="btn-small btn-red"
            label="delete"
            onClick={() => {
              props.onDelete(props.item);
            }}
          >
            {<MdDelete size="24" />}
          </button>
        </td>
      </tr>
    </>
  );
}
