import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import OrderLink from  '../containers/OrderLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import { DESCENT_ORDER, ASCENT_ORDER } from '../constants/TodoOrders'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed',
}

const ORDER_TITLES = {
  [DESCENT_ORDER]: 'Desc',
  [ASCENT_ORDER]: 'Asc'
}

const Footer = (props) => {
  const { activeCount, completedCount, onClearCompleted } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        )}
        {Object.keys(ORDER_TITLES).map(order =>
          <li key={order}>
            <OrderLink order={order}>
              {ORDER_TITLES[order]}
            </OrderLink>
          </li>
          )}
      </ul>
      {
        !!completedCount &&
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >Clear completed</button>
        
      }
    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
}

export default Footer
