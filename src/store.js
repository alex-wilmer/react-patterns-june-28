import { createStore } from 'redux'

let initialState = 'foo'

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.payload
    default:
      return state
  }
}

let store = createStore(reducer)

export default store
