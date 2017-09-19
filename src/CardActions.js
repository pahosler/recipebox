import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';
import '@material/fab/dist/mdc.fab.css';
import BackButton from './BackButton.js';
import MenuActions from './MenuActions.js';
import RecipeActions from './RecipeActions.js';
import AddActions from './AddActions.js';
import EditActions from './EditActions.js';

class CardActions extends Component {
  handleAddButton() {
    this.props.toggle.menuActions();
    this.props.toggle.menu();
    this.props.edit.clear();
    this.props.toggle.add();
    this.props.toggle.edit();
    this.props.toggle.editActions();
  }

  handleDelete() {
    this.props.toggle.modal();
  }

  handleEdit() {
    this.props.toggle.edit();
    this.props.toggle.back();
    this.props.toggle.recipe();
  }
  render() {
    return (
      <div>
        <MenuActions
          toggle={this.props.toggle}
          showMenu={this.props.state.showMenu}
          addClicked={this.handleAddButton.bind(this)}
        />
        <RecipeActions
          showRecipe={this.props.state.showRecipe}
          handleDelete={this.handleDelete.bind(this)}
          handleEdit={this.handleEdit.bind(this)}
        />
        <AddActions
          toggle={this.props.toggle}
          addRecipe={this.props.state.showAddRecipe}
        />
        <EditActions
          editRecipe={this.props.state.showEditRecipe}
          toggle={this.props.toggle}
          edit={this.props.edit}
          add={this.props.state.addRecipe}
          recipeBox={this.props.recipeBox}
          title={this.props.state.title}
        />
        <BackButton
          showBack={this.props.state.showBack}
          toggle={this.props.toggle}
        />
      </div>
    );
  }
}
export default CardActions;
