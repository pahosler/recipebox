import React from 'react';
import '@material/card/dist/mdc.card.css';
import Ingredients from './Ingredients.js';
import Directions from './Directions.js';

export default function Recipe(props) {
  let title = props.state.title;
  let ingredients = props.state.ingredients;
  let directions = props.state.directions;
  if (!props.showRecipe) {
    return null;
  }
  return (
    <div>
      <div>
        <p>
          <strong>{title.toUpperCase()}</strong>
        </p>
        <strong>Ingredients</strong>
        <ul>
          {ingredients.map((ingredient, i) => (
            <Ingredients key={i} value={ingredient} />
          ))}
        </ul>
      </div>
      <div>
        <strong>Directions</strong>
        <ul>
          {directions.map((direction, i) => (
            <Directions key={i} value={direction} />
          ))}
        </ul>
      </div>
    </div>
  );
}
