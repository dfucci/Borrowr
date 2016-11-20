import React, {Component, PropTypes} from 'react';
import Book from './Book';
const BookList = ({books}) => (
    <ul>
    {books.map(book =>
      <Book
        key={book.id}
        {...book}
      />
    )}
  </ul>
)
BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,

    }).isRequired).isRequired,
}

export default BookList