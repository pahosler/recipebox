import React from 'react';

export default function MenuActions(props) {
  if (!props.showMenu) {
    return null;
  }
  return (
    <button
      className="card-button4 mdc-fab mdc-fab--accent mdc-fab--mini mdc-fab--theme-dark "
      aria-label="Edit"
      onClick={props.addClicked}
    >
      <span className="mdc-fab__icon">
        <i className="fa fa-plus fa-2x" aria-hidden="true" />
      </span>
    </button>
  );
}
