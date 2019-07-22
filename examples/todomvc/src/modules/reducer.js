import todos from './todos'
import visibilityFilter from './filter'
import { combineReducers } from 'redux';

export default combineReducers({
    todos,
    visibilityFilter
})