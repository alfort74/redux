import { SHOW_ALL } from '../constants/filter'
// Actions
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// Action creator
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter})

// Reducer
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter