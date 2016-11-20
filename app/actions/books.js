let nextBookId = 0
export const addBook = (text) => {
  return {
    type: 'ADD_BOOK',
    id: nextBookId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
