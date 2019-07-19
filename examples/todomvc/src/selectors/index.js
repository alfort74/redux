import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, ASCENT_ORDER } from '../constants/TodoFilters'

const getVisibilityFilter = state => state.visibilityFilter.filter
const getTaskOrder = state => state.visibilityFilter.order
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTaskOrder, getTodos],
  (visibilityFilter, order, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return sortTodos(todos, order).slice()
      case SHOW_COMPLETED:
        return sortTodos(todos.filter(t => t.completed), order).slice()
      case SHOW_ACTIVE:
        return sortTodos(todos.filter(t => !t.completed), order).slice()
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)

function sortTodos (todos, order) {
  return todos.sort((one, another) => {
    const orderFix = order === ASCENT_ORDER ? 1 : -1
    return orderFix * (new Date(one.date) - new Date(another.date))
  })
}

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
  )
)