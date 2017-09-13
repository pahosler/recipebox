import React, {Component} from 'react';

class Ingredients extends Component {
  render(){
    return(
      <li className='ingredients'>{this.props.value.toUpperCase()}</li>
    )
  }
}

export default Ingredients
