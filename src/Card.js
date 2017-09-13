import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';
import Menu from './Menu.js';
import CardActions from './CardActions.js';
import Recipe from './Recipe.js';

class Card extends Component {
  render() {
    return (
      <div className='mdc-card'>
        <section className='card-title mdc-card__primary'>
          <h1 className='mdc-card__title mdc-card__title-large'>Recipe Box</h1>
        </section>
        <section className='menu-card mdc-card__supporting-text'>
        {this.props.sortedList.map((title)=>
           <Menu key={title.replace(/ /g,'-').toLowerCase()}
                 recipeBox={this.props.recipeBox}
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
        </section>
        <CardActions
          toggle={this.props.toggle}
          state={this.props.state}/>
      </div>
    )
  }
}

export default Card;
