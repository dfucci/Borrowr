import React, {Component, PropTypes} from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                {this.props.title}
                {this.props.owner}
            </div>
        );
    }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
};

export default Book;