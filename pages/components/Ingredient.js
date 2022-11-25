// Import dependencies

// Import componenets

export default function Ingredient(props) {
  return (
    <>
      <tr className="text-center odd:bg-slate-300 even:bg-slate-100">
        <td>{props.item}</td>
       
        <td>
          <button
            class="btn btn-red"
            label="delete"
            onClick={() => {
              props.onDelete(props.item);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
