import {connect} from 'react-redux'
import Footer from '../components/Footer'
import {changeFilter} from '../store/actions'
import {filters, getFilteredList} from '../utils/index'

const mapStateToProps = state => ({
  filters: filters,
  activeLength: getFilteredList(state.todos, 'SHOW_ACTIVE').length
})

const mapDispatchToProps = dispatch => ({
  filterChange: filterType =>  dispatch(changeFilter(filterType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
