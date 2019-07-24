import { SHOW_ALL, DESCENT_ORDER } from '../constants/filter'
// Actions
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
const SET_TASK_ORDER = 'SET_TASK_ORDER' 

// Action creator
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter})
export const setTaskOrder = order => ({type: SET_TASK_ORDER, order})

// Reducer
const initialState = {filter: SHOW_ALL, order: DESCENT_ORDER}
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {filter: action.filter})
    case SET_TASK_ORDER:
      return Object.assign({}, state, {order: action.order})
    default:
      return state
  }
}

export default visibilityFilter