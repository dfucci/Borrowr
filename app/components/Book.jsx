import React, { Component, PropTypes } from 'react';

class Book extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.title}
        {this.props.owner}
        {this.props.text}
      </div>
    );
  }
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Book;
