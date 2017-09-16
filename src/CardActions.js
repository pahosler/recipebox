import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';
import '@material/fab/dist/mdc.fab.css';
import BackButton from './BackButton.js';
import MenuActions from './MenuActions.js';
import RecipeActions from './RecipeActions.js';
import AddActions from './AddActions.js';
import EditActions from './EditActions.js';
class CardActions extends Component {
  handleAddButton(e){
    console.log('clicked!')
  }

  handleDelete(){
    console.log('delete',this.props.recipeBox.title[this.props.state.selectedRecipe])
    this.props.toggle.modal();
  }

  handleEdit(){
    console.log('edit',this.props.recipeBox.title[this.props.state.selectedRecipe])
  }
  render(){
    return (
      <div>
        <MenuActions showMenu={this.props.state.showMenu} addClicked={this.handleAddButton.bind(this)}/>
        <RecipeActions showRecipe={this.props.state.showRecipe} handleDelete={this.handleDelete.bind(this)} handleEdit={this.handleEdit.bind(this)}/>
        <AddActions addRecipe={this.props.state.showAddRecipe}/>
        <EditActions editRecipe={this.props.state.editRecipe}/>
        <BackButton
          showBack={this.props.state.showBack}
          toggle={this.props.toggle}/>
      </div>
    )
  }
}
export default CardActions
