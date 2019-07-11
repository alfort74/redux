import { SET_TASK_ORDER } from '../constants/ActionTypes'
import { DESCENT_ORDER } from '../constants/TodoOrders'

const taskOrder = (state = DESCENT_ORDER, action) => {
  switch (action.type) {
    case SET_TASK_ORDER:
      return action.order
    default:
      return state
  }
}

export default taskOrder