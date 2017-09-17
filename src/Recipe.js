import React from 'react';
import '@material/card/dist/mdc.card.css';
import Ingredients from './Ingredients.js';
import Directions from './Directions.js';

export default function Recipe(props){
    if (!props.showRecipe) {
      return null;
    }
    return (
      <div>
        <div>
          <p><strong>{props.recipeBox.title[props.selectedRecipe].toUpperCase()}</strong></p>
          <strong>Ingredients</strong>
          <ul>
            {props.recipeBox.ingredients[props.selectedRecipe].map((ingredient, i) => <Ingredients key={i} value={ingredient} recipeBox={props.recipeBox} selectedRecipe={props.selectedRecipe}/>)}
          </ul>
        </div>
        <div>
          <strong>Directions</strong>
          <ul>
            {props.recipeBox.directions[props.selectedRecipe].map((direction, i) => <Directions key={i} value={direction} recipeBox={props.recipeBox} selectedRecipe={props.selectedRecipe}/>)}
          </ul>
        </div>
      </div>
    )
  }
