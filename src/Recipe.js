import React, {Component} from 'react';
import '@material/card/dist/mdc.card.css';
import Ingredients from './Ingredients.js';
import Directions from './Directions.js';

class Recipe extends Component {
  render(){
    if(!this.props.showRecipe){
      return null;
    }
    return (
      <div>
      <div>
        <strong>Ingredients</strong>
        <ul>
        {this.props.recipeBox.ingredients[this.props.selectedRecipe].map((ingredient,i)=>
          <Ingredients key={i} value={ingredient}
            recipeBox={this.props.recipeBox}
            selectedRecipe={this.props.selectedRecipe}
          />
        )}
        </ul>
      </div>
      <div>
        <strong>Directions</strong>
        <ul>
        {this.props.recipeBox.directions[this.props.selectedRecipe].map((direction,i)=>
          <Directions key={i} value={direction}
          recipeBox={this.props.recipeBox}
          selectedRecipe={this.props.selectedRecipe}
           />
        )}
        </ul>
      </div>
      </div>
    )
  }
}

export default Recipe
