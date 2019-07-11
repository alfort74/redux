import { connect } from 'react-redux'
import { setTaskOrder } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.order === state.taskOrder
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setCondition: () => {
    dispatch(setTaskOrder(ownProps.order))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
