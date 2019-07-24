import { connect } from 'react-redux'
import { setTaskOrder } from '../modules/filter'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.order === state.visibilityFilter.order
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setTaskOrder(ownProps.order))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
