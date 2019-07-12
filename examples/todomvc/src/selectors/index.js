import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import { ASCENT_ORDER } from  '../constants/TodoOrders'

const getVisibilityFilter = state => state.visibilityFilter
const getTaskOrder = state => state.taskOrder
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTaskOrder, getTodos],
  (visibilityFilter, taskOrder, todos) => {
    const sortTodos = (todos, order) => {
      return todos.sort((one, another) => {
        const direction = order === ASCENT_ORDER ? 1 : -1
        return direction * (new Date(one.date) - new Date(another.date))
      })
    }

    switch (visibilityFilter) {
      case SHOW_ALL:
        return sortTodos(todos, taskOrder).slice()
      case SHOW_COMPLETED:
        return sortTodos(todos.filter(t => t.completed), taskOrder).slice()
      case SHOW_ACTIVE:
        return sortTodos(todos.filter(t => !t.completed), taskOrder).slice()
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)

export const getCompletedTodoCount = createSelector(
  [getTodos],
  todos => (
    todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
  )
)