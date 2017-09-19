import React from 'react';
import '@material/fab/dist/mdc.fab.css';

export default function AddActions(props) {
  const handleSubmit = () => {
    props.toggle.addActions();
    props.toggle.add();
    props.toggle.menu();
  };

  const handleCancel = () => {
    props.toggle.addActions();
    props.toggle.add();
    props.toggle.menu();
  };
  if (!props.addRecipe) {
    return null;
  }
  return (
    <div>
      <ul className="confirm-edit">
        <li>
          <button
            className="mdc-button mdc-button--raised mdc-button--primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </li>
        <li>
          <button
            className="mdc-button mdc-button--raised mdc-button--accent"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </li>
      </ul>
    </div>
  );
}
