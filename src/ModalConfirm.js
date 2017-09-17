import React, { Component } from 'react';
import '@material/button/dist/mdc.button.min.css';
import './modal.css';

class ModalConfirm extends Component {
  handleDelete() {
    this.props.deleteRecipe(this.props.selectedRecipe);
  }
  render() {
    if (!this.props.showModal) {
      return null;
    }
    return (
      <div className="recipe-box">
        <div className="modal-body">
          <div className="modal-confirm">
            <p>
              Delete{' '}
              {this.props.recipeBox.title[
                this.props.selectedRecipe
              ].toUpperCase()}?
            </p>
            <ul className="confirm">
              <li>
                <button
                  id="confirm"
                  className="mdc-button mdc-button--raised mdc-button--primary"
                  onClick={this.props.toggle.modal}
                >
                  Cancel
                </button>
              </li>
              <li>
                <button
                  id="confirm"
                  className="mdc-button mdc-button--raised mdc-button--accent"
                  onClick={this.handleDelete.bind(this)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalConfirm;
