import { ADD_BOOK, REMOVE_BOOK, SET_VISIBILITY_FILTER } from '../actions/books';

const book = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        id: action.id, 
        title: action.title, 
        owner: action.owner,
      }
    default:
      return state;
  }
};

const books = (state = [], action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return state.filter((aBook, i) => i === action.id);
    case ADD_BOOK:
      return [
        ...state,
        book(undefined, action)
      ]
    default:
      return state;
  }
};
export default books;
