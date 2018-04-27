import {connect} from 'react-redux'
import Header from '../components/Header'
import {addTodo, toggleAll} from '../store/actions'

const mapDispatchToProps = dispatch => ({
  addItem: id => dispatch(addTodo(id)),
  toggleAll: isCompleteAll => dispatch(toggleAll(isCompleteAll))
})

export default connect(
  null,
  mapDispatchToProps
)(Header)