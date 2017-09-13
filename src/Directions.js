import React, {Component} from 'react';

class Directions extends Component {
  render(){
    return(
      <li className='directions'>{this.props.value.toUpperCase()}</li>
    )
  }
}

export default Directions
