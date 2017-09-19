import React from 'react';

export default function Directions(props) {
  return (
    <li className="directions">
      <p>{props.value.toUpperCase()}</p>
    </li>
  );
}
