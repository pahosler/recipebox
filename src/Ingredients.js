import React from 'react';

export default function Ingredients(props) {
  return (
    <li className="ingredients">
      <p>{props.value.toUpperCase()}</p>
    </li>
  );
}
