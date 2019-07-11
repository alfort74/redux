import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import taskOrder from './taskOrder'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  taskOrder
})

export default rootReducer
