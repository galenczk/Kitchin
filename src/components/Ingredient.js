// Import dependencies
import React from "@testing-library/react"

// Import componenets
import Button from "./Button";

export default function Ingredient(props) {
  return (
    <li>
      <div>
        <p>{props.item}</p>
      </div>
    </li>
  );
}
