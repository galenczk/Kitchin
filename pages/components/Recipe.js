// Import dependencies

// Import componenets

export default function Recipe(props) {
  return (
    <li>
      <div class="flex">
        <p class="ml-2">{props.item}</p>
        <div class="w-36" />
        
      </div>
    </li>
  );
}
