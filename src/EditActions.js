import React from 'react';
import '@material/button/dist/mdc.button.css';

export default function EditActions(props) {
  const handleSubmit = () => {
    console.log('Submit!');
    props.toggle.edit();
    props.toggle.recipe();
    props.toggle.back();
    props.toggle.recipeActions();
  };

  const handleCancel = () => {
    props.toggle.edit();
    props.toggle.recipe();
    props.toggle.back();
    props.toggle.recipeActions();
  };
  if (!props.editRecipe) {
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
