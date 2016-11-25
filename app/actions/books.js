export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_BOOK = 'ADD_BOOK';

let nextBookId = 0;
export const addBook = (text) => {
  return {
    type: ADD_BOOK,
    id: nextBookId++,
    text: "testo",
    title: "title",
    owner: "borrowed"
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
