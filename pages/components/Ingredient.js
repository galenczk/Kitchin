// Import dependencies
import React from "@testing-library/react"

// Import componenets
import Button from "./Button";

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
        <Button 
          class="btn btn-delete"
          label="delete"
          onClick={() => {props.onDelete(props.item)}}
          />
      </div>
    </li>
  );
}
