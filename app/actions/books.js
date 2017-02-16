export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

let nextBookId = 0;
export const addBook = text =>
   ({
     type: ADD_BOOK,
     id: nextBookId++,
     text,
     title: 'title',
     owner: 'borrowed'
   });

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    id
  };
};
export const setVisibilityFilter = filter =>
   ({
     type: SET_VISIBILITY_FILTER,
     filter
   });
