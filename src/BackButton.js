import React, { Component } from 'react';
class BackButton extends Component {
  handleClick() {
    this.props.toggle.menu();
    this.props.toggle.recipe();
    this.props.toggle.back();
  }
  render() {
    if (!this.props.showBack) {
      return null;
    }
    return (
      <i
        className="back-button fa fa-chevron-left fa-2x"
        onClick={this.handleClick.bind(this)}
      />
    );
  }
}
export default BackButton;
