import React, {Component, PropTypes} from 'react';
import Book from './Book';
const BookList = ({books, removeBook}) => (
    <ul>
    {books.map(book =>
      <Book
        key={book.id}
        {...book}
        onClick={() =>  removeBook(book.id) }
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