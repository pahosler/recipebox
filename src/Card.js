import React from 'react';
import '@material/card/dist/mdc.card.min.css';
import Menu from './Menu.js';
import CardActions from './CardActions.js';
import Recipe from './Recipe.js';
import ModalConfirm from './ModalConfirm.js';
import Edit from './Edit.js';

export default function Card(props) {
  const sortedList = props.getSortedList(props.recipeBox.list);
  return (
    <div className="recipe-box">
      <div className="mdc-card">
        <section className="card-title mdc-card__primary">
          <p className="card-title mdc-card__title mdc-card__title-large">
            Recipe Box
          </p>
        </section>
        <section id="o-flow" className="menu-card mdc-card__supporting-text">
          {sortedList.map(title => (
            <Menu
              key={title.replace(/ /g, '-').toLowerCase()}
              list={props.recipeBox.list}
              value={title}
              showMenu={props.state.showMenu}
              whichRecipe={props.whichRecipe}
              toggle={props.toggle}
            />
          ))}
          <Recipe
            recipeBox={props.recipeBox}
            showRecipe={props.state.showRecipe}
            selectedRecipe={props.state.selectedRecipe}
            toggle={props.toggle}
            fields={props.fields}
          />
          <Edit
            add={props.state.addRecipe}
            recipeBox={props.recipeBox}
            showEdit={props.state.showEditRecipe}
            selectedRecipe={props.state.selectedRecipe}
            toggle={props.toggle}
            edit={props.edit}
            fields={props.fields}
          />
          <ModalConfirm
            showModal={props.state.showModalConfirm}
            selectedRecipe={props.state.selectedRecipe}
            recipeBox={props.recipeBox}
            toggle={props.toggle}
            deleteRecipe={props.deleteRecipe}
          />
        </section>
        <section className="card-actions mdc-card__actions">
          <CardActions
            recipeBox={props.recipeBox}
            toggle={props.toggle}
            state={props.state}
            edit={props.edit}
          />
        </section>
      </div>
    </div>
  );
}
