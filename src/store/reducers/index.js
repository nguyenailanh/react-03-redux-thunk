import { combineReducers } from 'redux'


const findIndex = (todos, id) => {
  return todos.indexOf(todos.filter(item => (item.id === id))[0])
}

/**
 * TODOS REDUCER
 * @param {*} state
 * @param {*} action
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      console.log('FETCH DONE')
     return action.todos || []
    // case 'ADD_TODO':
    //   return [
    //       ...state,
    //       {
    //           id: action.id,
    //           text: action.text,
    //           completed: false
    //         }
    //       ]

    // case 'TOGGLE_TODO':
    //   return state.map(todo => {
    //       return (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //     })
    // case 'TOGGLE_TODO_ALL':
    //   return state.map(todo => ({...todo, completed: action.isCompleteAll}))

    // case 'EDIT_TODO':
    //   return state.map(todo => {
    //     if (todo.id === action.id) {
    //     // debugger
    //     return {...todo, text: action.text}
    //     }
    //       return todo
    //     })

    // case 'REMOVE_TODO':
    //   let newState = [...state];
    //   newState.splice(findIndex(state, action.id), 1)

    //   return newState

    default:
     return state
    }
  }
/**
 * FILTER REDUCER
 * @param {*} state
 * @param {*} action
 */
const filters = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  todos,
  filters
})

