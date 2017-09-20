import React from 'react';
import '@material/button/dist/mdc.button.css';

export default function EditActions(props) {
  const handleSubmit = () => {
    if (props.edit.entryError) {
      return;
    } else if (!props.add) {
      props.toggle.edit();
      props.toggle.recipe();
      props.toggle.back();
      props.toggle.recipeActions();
      props.edit.submit();
    } else {
      props.edit.submit();
      props.toggle.add();
      props.toggle.edit();
      props.toggle.menu();
      props.toggle.menuActions();
    }
  };

  const handleCancel = () => {
    if (!props.edit.entryError) {
      props.toggle.entryError(false);
    }
    if (!props.add) {
      props.edit.reset();
      props.toggle.edit();
      props.toggle.recipe();
      props.toggle.back();
      props.toggle.recipeActions();
    } else {
      props.edit.reset();
      props.toggle.edit();
      props.toggle.menu();
      props.toggle.add();
      props.toggle.menuActions();
    }
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
