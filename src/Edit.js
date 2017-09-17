import React from 'react';
import '@material/textfield/dist/mdc.textfield.min.css';
//import { MDCTextfield, MDCTextfieldFoundation } from '@material/textfield';

export default function Edit(props) {
  const recipeBox = props.recipeBox;
  const selectedRecipe = props.selectedRecipe;
  let title = recipeBox.title[selectedRecipe];
  let ingredients = recipeBox.ingredients[selectedRecipe];
  let directions = recipeBox.directions[selectedRecipe];

  const handleChange = e => {
    return (title = e);
  };

  if (!props.showEdit) {
    return null;
  }
  const Ingredient = ingredients.map((item, indx) => (
    <div key={title.replace(/ /g, '-').toLowerCase() + indx.toString()}>
      <div className="edit-frame">
        <div className="mdc-textfield mdc-textfield--upgraded mdc-textfield--fullwidth">
          <input
            id={indx}
            type="text"
            className="mdc-textfield__input"
            value={item}
            onChange={handleChange.bind(this)}
          />

          <label
            htmlFor={indx}
            className="mdc-textfield__label mdc-textfield__label--float-above"
          >
            Ingredient
          </label>
        </div>
      </div>
      <div>
        <ul>
          <li className="edit-item">
            <i id={indx} className="fa fa-plus fa-fw" />
          </li>
          <li className="edit-item">
            <i id={indx} className="fa fa-minus fa-fw" />
          </li>
        </ul>
      </div>
    </div>
  ));

  const Direction = directions.map((item, indx) => (
    <div key={title.replace(/ /g, '-').toLowerCase() + indx.toString()}>
      <div className="edit-frame">
        <div className="mdc-textfield mdc-textfield--upgraded mdc-textfield--fullwidth">
          <input
            id={indx}
            type="text"
            className="mdc-textfield__input"
            value={item}
            onChange={handleChange.bind(this)}
          />
          <label
            htmlFor={indx}
            className="mdc-textfield__label mdc-textfield__label--float-above"
          >
            Direction
          </label>
        </div>
      </div>
      <div>
        <ul>
          <li className="edit-item">
            <i id={indx} className="fa fa-plus fa-fw" />
          </li>
          <li className="edit-item">
            <i id={indx} className="fa fa-minus fa-fw" />
          </li>
        </ul>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="mdc-textfield mdc-textfield--upgraded mdc-textfield--fullwidth">
        <input
          id="title"
          type="text"
          className="mdc-textfield__input"
          name="title"
          value={title}
          onChange={handleChange.bind(this)}
        />
        <label
          htmlFor="title"
          className="mdc-textfield__label mdc-textfield__label--float-above"
        >
          Title
        </label>
      </div>
      <p className="edit">Ingredients</p>
      {Ingredient}
      <p className="edit">Directions</p>
      {Direction}
    </div>
  );
}
