import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';
import '@material/fab/dist/mdc.fab.css';
import BackButton from './BackButton.js'
class CardActions extends Component {
  render(){
    return (
      <section className="card-actions mdc-card__actions">
        <label htmlFor='menu-toggle'><i className="card-button1 mdc-fab mdc-fab--plain mdc-fab--mini material-icons" aria-label="Menu">
          <span className='mdc-fab__icon'>
          <i className='fa fa-bars ' aria-hidden='true'></i>
          </span>
        </i>
        </label>
        <input id='menu-toggle' type='checkbox'/>
        <div className='menu' id='menu-buttons'>
        <ul>
        <li>
        <button className="card-button2 mdc-fab mdc-fab--plain mdc-fab--mini " aria-label="Edit">
          <span className="mdc-fab__icon">
            <i className='fa fa-trash-o fa-2x' aria-hidden='true'></i>
          </span>
        </button>
        </li>
        <li>
        <button className="card-button3 mdc-fab mdc-fab--plain mdc-fab--mini " aria-label="Edit">
          <span className="mdc-fab__icon">
          <i className='fa fa-pencil fa-2x' aria-hidden='true'></i>
          </span>
        </button>
        </li>
        <li>
        <button className="card-button4 mdc-fab mdc-fab--plain mdc-fab--mini " aria-label="Edit">
          <span className="mdc-fab__icon">
            <i className='fa fa-plus fa-2x' aria-hidden='true'></i>
          </span>
        </button>
        </li>
        </ul>
        </div>
        <BackButton
          showBack={this.props.state.showBack}
          toggle={this.props.toggle}/>
      </section>
    )
  }
}
export default CardActions
