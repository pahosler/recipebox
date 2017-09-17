import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo from './logo.svg';
import fcclogo from './freecodecamp_logo.svg';
import Card from './Card.js';
import Footer from './Footer.js';
import './App.css';

const recipes = [
  {
    title: 'spaghetti',
    ingredients: ['1 lb pasta', '2 jars Ragu'],
    directions: [
      'Add pasta to 4qts boiling water',
      'stir occasionally and let boil for approx 10 mins',
      'Remove from heat and drain water from pasta',
      'Heat Ragu according to directions on jar'
    ]
  },
  {
    title: 'pizza',
    ingredients: ['1 frozen Digiorno Pizza'],
    directions: [
      'Follow heating instructions on box',
      'Slice into 8 pieces',
      'if you think 8 would be too filling slice into 4 pieces',
      "and remember, it's not delivery, it's Digiorno!"
    ]
  },
  {
    title: 'tomato soup',
    ingredients: ['1 can Progresso Tomato Basil Soup'],
    directions: [
      'Use can opener to open can',
      'Empty into a microwave safe bowl',
      'Heat on high approximately 3 mins'
    ]
  },
  {
    title: 'wish sandwich',
    ingredients: ['2 slices of bread', '1 Wish'],
    directions: ['While holding bread use wish to wish for meat', 'Eat bread']
  },
  {
    title: 'ricochet biscuit',
    ingredients: ['1 rubber biscuit'],
    directions: [
      'Throw biscuit against wall',
      "If biscuit doesn't bounce back into your mouth, you go hungry!"
    ]
  }
];

const recipeList = () => {
  let list = {};
  let ingredients = {};
  let title = {};
  let directions = {};
  recipes.forEach((recipe, index) => {
    title[index] = recipe.title;
    list[recipe.title] = index;
    ingredients[index] = recipe.ingredients;
    directions[index] = recipe.directions;
  });
  return { title, list, ingredients, directions };
};

const getSortedList = list => {
  return Object.keys(list).sort();
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBack: false,
      showMenu: true,
      showRecipe: false,
      showAddRecipe: false,
      showEditRecipe: false,
      showModalConfirm: false,
      showRadioSwitches: false,
      recipeTitleChanged: false,
      recipeDirectionChanged: false,
      reipeIngredientChanged: false,
      menuActions: true,
      recipeActions: false,
      editActions: false,
      addActions: false,
      selectedRecipe: null
    };
    this.whichRecipe = this.whichRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

    this.toggle = {
      add: this.toggleAdd.bind(this),
      addActions: this.toggleAddActions.bind(this),
      back: this.toggleBack.bind(this),
      edit: this.toggleEdit.bind(this),
      editActions: this.toggleEditActions.bind(this),
      menu: this.toggleMenu.bind(this),
      menuActions: this.toggleMenuActions.bind(this),
      modal: this.toggleConfirm.bind(this),
      radio: this.toggleRadio.bind(this),
      recipe: this.toggleRecipe.bind(this),
      recipeActions: this.toggleRecipeActions.bind(this)
    };
  }

  whichRecipe(selectedRecipe) {
    this.setState({ selectedRecipe });
  }
  deleteRecipe(selectedRecipe) {
    recipes.splice(selectedRecipe, 1);
    recipeList();
    this.toggle.modal();
    this.toggle.recipe();
    this.toggle.back();
    this.toggle.menu();
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleMenuActions() {
    this.setState({ menuActions: !this.state.menuActions });
  }

  toggleAdd() {
    this.setState({ showAddRecipe: !this.state.showAddRecipe });
  }

  toggleAddActions() {
    this.setState({ addActions: !this.state.addActions });
  }

  toggleBack() {
    this.setState({ showBack: !this.state.showBack });
  }

  toggleEdit() {
    this.setState({
      showEditRecipe: !this.state.showEditRecipe
    });
  }

  toggleEditActions() {
    this.setState({ editActions: !this.state.editActions });
  }

  toggleConfirm() {
    this.setState({ showModalConfirm: !this.state.showModalConfirm });
  }

  toggleRadio() {
    this.setState({ showRadioSwitches: !this.state.showRadioSwitches });
  }

  toggleRecipe() {
    this.setState({ showRecipe: !this.state.showRecipe });
  }

  toggleRecipeActions() {
    this.setState({ recipeActions: !this.state.recipeActions });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={fcclogo} className="fcc-logo" alt="freecodecamp_logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Card
          getSortedList={getSortedList.bind(this)}
          recipeBox={recipeList()}
          state={this.state}
          toggle={this.toggle}
          whichRecipe={this.whichRecipe}
          deleteRecipe={this.deleteRecipe}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
