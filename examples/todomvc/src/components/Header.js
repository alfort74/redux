import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import OrderLink from '../containers/OrderLink'
import { ORDER_TITLES } from '../constants/button'

const Header = ({ addTodo }) => (
  <div>
    <footer className="footer">
      <ul className="filters">
        {Object.keys(ORDER_TITLES).map(order =>
          <li key={order}>
            <OrderLink order={order}>
              {ORDER_TITLES[order]}
            </OrderLink>
          </li>
        )}
      </ul>
    </footer>
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            addTodo(text)
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
  </div>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
