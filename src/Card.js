import React from 'react';
// import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.min.css';
import Menu from './Menu.js';
import CardActions from './CardActions.js';
import Recipe from './Recipe.js';
import ModalConfirm from './ModalConfirm.js';
import Edit from './Edit.js';

// class Card extends Component {
//
//   render() {

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
        <section className="menu-card mdc-card__supporting-text">
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
          />
          <Edit
            recipeBox={props.recipeBox}
            showEdit={props.state.showEditRecipe}
            selectedRecipe={props.state.selectedRecipe}
            toggle={props.toggle}
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
          />
        </section>
      </div>
    </div>
  );
}

// export default Card;
