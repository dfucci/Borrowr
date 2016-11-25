import {ADD_BOOK, SET_VISIBILITY_FILTER} from '../actions/books';

const book = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK:
      console.log("object2s");
      return {
        id: action.id, 
        title: action.title, 
        owner: action.owner,
      }
    default:
      return state
  }
}

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        book(undefined, action)
      ]
    default:
      return state
  }
}

export default books