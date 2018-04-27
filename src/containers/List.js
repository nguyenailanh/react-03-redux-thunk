import {connect} from 'react-redux'
import List from '../components/List'
import {toggleTodo, editItem, removeItem, fetchToDos} from '../store/actions'
import {getFilteredList} from '../utils/index'

const mapStateToProps = state => {
  return {list: getFilteredList(state.todos, state.filters)}
  // return {list: fetchTodos()}
}

const mapDispatchToProps = dispatch => ({
  changeStatus: item => dispatch(toggleTodo(item.id)),
  editItem: (item, text) => dispatch(editItem(item.id, text)),
  removeItem: item => dispatch(removeItem(item.id)),
  fetchToDos: () => {
    dispatch(fetchToDos())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)