import React from 'react';
import '@material/fab/dist/mdc.fab.css';

export default function RecipeActions(props) {
  if (!props.showRecipe) {
    return null;
  }
  return (
    <div>
      <label htmlFor="menu-toggle">
        <i
          className="card-button1 mdc-fab mdc-fab--accent mdc-fab--mini"
          aria-label="Menu"
        >
          <span className="mdc-fab__icon">
            <i className="fa fa-bars " aria-hidden="true" />
          </span>
        </i>
      </label>
      <input id="menu-toggle" type="checkbox" />
      <div className="menu" id="menu-buttons">
        <ul>
          <li>
            <button
              className="card-button2 mdc-fab mdc-fab--primary mdc-fab--mini"
              aria-label="Edit"
              onClick={props.handleDelete}
            >
              <span className="mdc-fab__icon">
                <i className="fa fa-trash-o fa-2x" aria-hidden="true" />
              </span>
            </button>
          </li>
          <li>
            <button
              className="card-button3 mdc-fab mdc-fab--secondary mdc-fab--mini"
              aria-label="Edit"
              onClick={props.handleEdit}
            >
              <span className="mdc-fab__icon">
                <i className="fa fa-pencil fa-2x" aria-hidden="true" />
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
