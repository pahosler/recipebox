import React from 'react';
import '@material/textfield/dist/mdc.textfield.min.css';
//import { MDCTextfield, MDCTextfieldFoundation } from '@material/textfield';

export default function Edit(props) {
  let title = props.fields.title;
  let ingredients = props.fields.ingredients;
  let directions = props.fields.directions;
  const KEY_ENTER = 13;
  const TITLE = props.recipeBox.title[props.selectedRecipe];
  const badEntry = {
    color: '#990000'
  };
  const goodEntry = {
    color: '#006600'
  };

  const testTitle = entry => {
    if (entry.length < 1) {
      if (!props.entryError) {
        props.entryError(true);
      }
      return badEntry;
    } else if (props.add) {
      if (props.recipeBox.list.hasOwnProperty(entry.toLowerCase())) {
        if (!props.entryError) {
          props.entryError(true);
        }
        return badEntry;
      } else {
        if (props.entryError) {
          props.entryError(false);
        }
        return goodEntry;
      }
    } else {
      if (
        entry !== TITLE &&
        props.recipeBox.list.hasOwnProperty(entry.toLowerCase())
      ) {
        if (!props.entryError) {
          props.entryError(true);
        }
        return badEntry;
      } else {
        if (props.entryError) {
          props.entryError(false);
        }
        return goodEntry;
      }
    }
  };

  const any = element => element === '';

  const handleChange = e => {
    if (e.target.id === 'title') {
      props.edit.field(e.target.id, e.target.value);
    } else {
      props.edit.field(e.target.name, e.target.value, e.target.id);
    }
  };

  const handleIngredientAdd = e => {
    let field = 'ingredients';
    let value =
      parseInt(e.target.id, 10) === ingredients.length - 1
        ? parseInt(e.target.id, 10) + 1
        : parseInt(e.target.id, 10);
    if (value === 0) {
      value = 1;
    }
    if (ingredients.some(any)) {
      return;
    }
    props.edit.insert(field, value);
  };

  const handleIngredientDel = e => {
    let field = 'ingredients';
    let value = parseInt(e.target.id, 10);
    if (ingredients.length < 2) {
      return;
    }
    props.edit.delete(field, value);
  };

  const handleDirectionAdd = e => {
    let field = 'directions';
    let value = parseInt(e.target.id, 10) + 1;
    if (value === 0) {
      value = 1;
    }
    if (directions.some(any)) {
      return;
    }
    props.edit.insert(field, value);
  };

  const handleDirectionDel = e => {
    let field = 'directions';
    let value = parseInt(e.target.id, 10);
    if (directions.length < 2) {
      return;
    }
    props.edit.delete(field, value);
  };

  const handleKeypress = e => {
    if (e.which === KEY_ENTER) {
      if (e.target.name === 'ingredients') {
        handleIngredientAdd(e);
      } else if (e.target.name === 'directions') {
        handleDirectionAdd(e);
      }
    }
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
            name="ingredients"
            onChange={handleChange.bind(this)}
            onKeyUp={handleKeypress.bind(this)}
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
            <i
              id={indx}
              className="fa fa-plus fa-fw"
              onClick={handleIngredientAdd.bind(this)}
            />
          </li>
          <li className="edit-item">
            <i
              id={indx}
              className="fa fa-minus fa-fw"
              onClick={handleIngredientDel.bind(this)}
            />
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
            name="directions"
            onChange={handleChange.bind(this)}
            onKeyUp={handleKeypress.bind(this)}
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
            <i
              id={indx}
              className="fa fa-plus fa-fw"
              onClick={handleDirectionAdd.bind(this)}
            />
          </li>
          <li className="edit-item">
            <i
              id={indx}
              className="fa fa-minus fa-fw"
              onClick={handleDirectionDel.bind(this)}
            />
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
          required
        />
        <label
          htmlFor="title"
          className="mdc-textfield__label mdc-textfield__label--float-above"
          style={testTitle(title)}
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
