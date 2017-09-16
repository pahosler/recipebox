import React from 'react';
import '@material/fab/dist/mdc.fab.css';

export default function RecipeActions(props) {
  if (!props.showRecipe) {
    return null
  }
  return (
    <div>
      <label htmlFor='menu-toggle'>
        <i className="card-button1 mdc-fab mdc-fab--plain mdc-fab--mini material-icons" aria-label="Menu">
          <span className='mdc-fab__icon'>
            <i className='fa fa-bars ' aria-hidden='true'></i>
          </span>
        </i>
      </label>
      <input id='menu-toggle' type='checkbox'></input>
      <div className='menu' id='menu-buttons'>
        <ul>
          <li>
            <button className="card-button2 mdc-fab mdc-fab--plain mdc-fab--mini" aria-label="Edit" onClick={props.handleDelete}>
              <span className="mdc-fab__icon">
                <i className='fa fa-trash-o fa-2x' aria-hidden='true'></i>
              </span>
            </button>
          </li>
          <li>
            <button className="card-button3 mdc-fab mdc-fab--plain mdc-fab--mini" aria-label="Edit" onClick={props.handleEdit}>
              <span className="mdc-fab__icon">
                <i className='fa fa-pencil fa-2x' aria-hidden='true'></i>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
