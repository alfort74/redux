// Actions 

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


// Action Creators

export const addTodo = text => ({ type: ADD_TODO, text })
export const deleteTodo = id => ({ type: DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: EDIT_TODO, id, text })
export const completeTodo = id => ({ type: COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter})

// Reducer

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
    date: Date().toString()
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          date: Date().toString()
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text, date: Date().toString() } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
