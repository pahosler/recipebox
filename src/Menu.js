import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';

class Menu extends Component {
  handleClick(e) {
    this.props.whichRecipe(e.target.id);
    this.props.toggle.menu()
    this.props.toggle.recipe();
    this.props.toggle.back();
  }
  componentWillMount(){
    console.log('mounting menu list')
  }
  componentDidMount(){
    console.log('it mounted a menu');
  }
  render() {
    this.handleClick = this.handleClick.bind(this);
    if (!this.props.showMenu) {
      return null;
    }

    return (
      <p className="menu-list" id={this.props.list[this.props.value]} onClick={this.handleClick}>{this.props.value.toUpperCase()}</p>
    )
  }
}
export default Menu
