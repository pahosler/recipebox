import React, {Component} from 'react';

class Directions extends Component {
  render(){
    return(
      <li className='directions'><p>{this.props.value.toUpperCase()}</p></li>
    )
  }
}

export default Directions
