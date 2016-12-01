export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

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

export const removeBook = (id) => {
  console.log("remove");
  return {
    type: REMOVE_BOOK,
    id
  }
} 
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
