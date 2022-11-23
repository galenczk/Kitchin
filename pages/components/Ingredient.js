// Import dependencies

// Import componenets

export default function Ingredient(props) {
  return (
    <li>
      <div
        class="flex"
      >
        <p
          class="ml-2"
        >{props.item}</p>
        <div 
          class="w-36"
        />
        <button 
          class="btn btn-delete"
          label="delete"
          onClick={() => {props.onDelete(props.item)}}
          >Delete</button>
      </div>
    </li>
  );
}
