// Import dependencies.
import React from "react"

export default function Button(props){

  return (
    <button

      className={props.class}
      onClick={props.onClick}
      type={props.type}
    >
      {props.label}
    </button>
  );
}


