import React, {Component} from 'react';

class Ingredients extends Component {
  render(){
    return(
      <li className='ingredients'><p>{this.props.value.toUpperCase()}</p></li>
    )
  }
}

export default Ingredients
