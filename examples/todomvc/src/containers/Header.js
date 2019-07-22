import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../modules/todos'

export default connect(null, { addTodo })(Header)
