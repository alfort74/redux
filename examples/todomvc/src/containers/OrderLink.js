import { connect } from 'react-redux'
import { setTaskOrder } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.order === state.visibilityFilter.order
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFunc: () => {
    dispatch(setTaskOrder(ownProps.order))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
