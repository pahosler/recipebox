import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.min.css';
import Menu from './Menu.js';
import CardActions from './CardActions.js';
import Recipe from './Recipe.js';
import ModalConfirm from './ModalConfirm.js';

class Card extends Component {
  componentWillMount(){
    console.log('card mounted');
  }
  render() {
    const sortedList = this.props.sortedList;
    return (
      <div className='recipe-box'>
      <div className='mdc-card'>

        <section className='card-title mdc-card__primary'>
          <p className='card-title mdc-card__title mdc-card__title-large'>Recipe Box</p>
        </section>
        <section className='menu-card mdc-card__supporting-text'>
        {sortedList.map((title)=>
           <Menu key={title.replace(/ /g,'-').toLowerCase()}
                 list={this.props.recipeBox.list}
                 value={title}
                 showMenu={this.props.state.showMenu}
                 whichRecipe={this.props.whichRecipe}
                 toggle={this.props.toggle}
            />)}
            <Recipe recipeBox={this.props.recipeBox}
                    showRecipe={this.props.state.showRecipe}
                    selectedRecipe={this.props.state.selectedRecipe}
                    toggle={this.props.toggle}
            />
            <ModalConfirm
            showModal={this.props.state.showModalConfirm}
            selectedRecipe={this.props.state.selectedRecipe}
            recipeBox={this.props.recipeBox}
            toggle={this.props.toggle}
            deleteRecipe={this.props.deleteRecipe}/>
        </section>
        <section className="card-actions mdc-card__actions">
        <CardActions
          recipeBox={this.props.recipeBox}
          toggle={this.props.toggle}
          state={this.props.state}/>
          </section>
      </div>
      </div>
    )
  }
}

export default Card;
