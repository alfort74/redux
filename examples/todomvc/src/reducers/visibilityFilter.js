import { SET_VISIBILITY_FILTER, SET_TASK_ORDER } from '../constants/ActionTypes'
import { SHOW_ALL, DESCENT_ORDER } from '../constants/TodoFilters'

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