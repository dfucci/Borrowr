import React, {Component, PropTypes} from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Book;