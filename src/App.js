import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import logo from './logo.svg';
import fcclogo from './freecodecamp_logo.svg';
import Card from './Card.js';
import Footer from './Footer.js';
import './App.css';

const seedRecipes = [
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

const recipeList = recipes => {
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

const checkStorage = () => {
  if (localStorage.getItem('recipes') === null) {
    setStorage(seedRecipes);
  }
};

const setStorage = list => {
  localStorage.setItem('recipes', JSON.stringify(list));
  return;
};

const getStorage = () => {
  checkStorage();
  return JSON.parse(localStorage.getItem('recipes'));
};

let recipes = getStorage();

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
      entryError: false,
      menuActions: true,
      recipeActions: false,
      editActions: false,
      addActions: false,
      addRecipe: false,
      selectedRecipe: null,
      title: '',
      ingredients: [],
      directions: []
    };

    this.whichRecipe = this.whichRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);

    this.fields = {
      title: this.state.title,
      ingredients: this.state.ingredients,
      directions: this.state.directions
    };

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
      recipeActions: this.toggleRecipeActions.bind(this),
      entryError: this.toggleEntryError.bind(this)
    };

    this.edit = {
      field: this.editField.bind(this),
      delete: this.deleteField.bind(this),
      insert: this.insertField.bind(this),
      clear: this.clearFields.bind(this),
      submit: this.submitChanges.bind(this),
      reset: this.resetChanges.bind(this),
      entryError: false
    };
  }

  clearFields() {
    let title = '';
    let ingredients = [''];
    let directions = [''];
    this.setState({
      title: title,
      ingredients: ingredients,
      directions: directions
    });
    this.fields = { title, ingredients, directions };
  }

  resetChanges() {
    let recipes = getStorage();
    let recipeBox = recipeList(recipes);
    let selected = this.state.selectedRecipe;
    let title = recipeBox.title[selected];
    let ingredients = recipeBox.ingredients[selected];
    let directions = recipeBox.directions[selected];

    this.setState({
      title,
      ingredients,
      directions
    });
    this.fields = { title, ingredients, directions };
  }

  editField(field, value, selected) {
    if (field === 'title') {
      this.setState({ title: value });
    } else if (field === 'ingredients') {
      let changed = this.state[field];
      changed.splice(selected, 1, value);
      this.setState({ ingredients: changed });
    } else {
      let changed = this.state[field];
      changed.splice(selected, 1, value);
      this.setState({ directions: changed });
    }
  }

  deleteField(field, selected) {
    let deleted = this.state[field];
    deleted.splice(selected, 1);
    if (field === 'ingredients') {
      this.setState({ ingredients: deleted });
    } else {
      this.setState({ directions: deleted });
    }
  }

  insertField(field, selected) {
    let inserted = this.state[field];
    inserted.splice(selected, 0, '');
    if (field === 'ingredients') {
      this.setState({ ingredients: inserted });
    } else {
      this.setState({ directions: inserted });
    }
  }

  submitChanges() {
    let selectedRecipe = this.state.selectedRecipe;
    let title = this.state.title.toLowerCase();
    let ingredients =
      this.state.ingredients < 1 ? [''] : this.state.ingredients;
    let directions = this.state.directions < 1 ? [''] : this.state.directions;
    if (!this.state.addRecipe) {
      recipes[selectedRecipe].title = title;
      recipes[selectedRecipe].ingredients = ingredients;
      recipes[selectedRecipe].directions = directions;
      setStorage(recipes);
    } else {
      recipes.splice(recipes.length, 1, {
        title: title,
        ingredients: ingredients,
        directions: directions
      });
      //this.toggle.add();
      setStorage(recipes);
    }
  }

  whichRecipe(selectedRecipe) {
    let recipe = recipeList(recipes);
    let title = recipe.title[selectedRecipe];
    let ingredients = recipe.ingredients[selectedRecipe];
    let directions = recipe.directions[selectedRecipe];
    this.setState({ selectedRecipe, title, ingredients, directions });
    this.fields = { title, ingredients, directions };
  }

  deleteRecipe(selectedRecipe) {
    recipes.splice(selectedRecipe, 1);
    this.toggle.modal();
    this.toggle.recipe();
    this.toggle.back();
    this.toggle.menu();
    setStorage(recipes);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  toggleMenuActions() {
    this.setState({ menuActions: !this.state.menuActions });
  }

  toggleAdd() {
    this.setState({ addRecipe: !this.state.addRecipe });
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
    this.setState({
      showRecipe: !this.state.showRecipe
    });
  }

  toggleRecipeActions() {
    this.setState({ recipeActions: !this.state.recipeActions });
  }

  toggleEntryError(status) {
    this.edit.entryError = status;
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
          recipeBox={recipeList(recipes)}
          state={this.state}
          toggle={this.toggle}
          edit={this.edit}
          whichRecipe={this.whichRecipe}
          deleteRecipe={this.deleteRecipe}
          fields={{
            title: this.state.title,
            ingredients: this.state.ingredients,
            directions: this.state.directions
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
