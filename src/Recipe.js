import React from 'react';
import '@material/card/dist/mdc.card.css';
import Ingredients from './Ingredients.js';
import Directions from './Directions.js';

export default function Recipe(props) {
  if (!props.showRecipe) {
    return null;
  }
  return (
    <div>
      <div>
        <p>
          <strong>{props.fields.title.toUpperCase()}</strong>
        </p>
        <strong>Ingredients</strong>
        <ul>
          {props.fields.ingredients.map((ingredient, i) => (
            <Ingredients key={i} value={ingredient} />
          ))}
        </ul>
      </div>
      <div>
        <strong>Directions</strong>
        <ul>
          {props.fields.directions.map((direction, i) => (
            <Directions key={i} value={direction} />
          ))}
        </ul>
      </div>
    </div>
  );
}
