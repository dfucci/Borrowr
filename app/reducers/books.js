const book = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        id: action.id,
        text: action.text,
      }
    default:
      return state
  }
}

const books = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        book(undefined, action)
      ]
    default:
      return state
  }
}

export default books