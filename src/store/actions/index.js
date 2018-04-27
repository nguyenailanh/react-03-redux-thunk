import { todosRef } from "../../firebase/index";

export const fetchToDos = () => async dispatch => {
  console.log('FETCH TODOS')
  todosRef.on("value", snapshot => {
    console.log('DATA CHANGED')
    dispatch({
      type: 'FETCH_TODOS',
      todos: snapshot.val()
    })
  })
}

export const addTodo = (newToDo ) => async dispatch =>  {
  todosRef.push().set({
     text: newToDo,
     completed: false
  });
};

export const toggleTodo = id => async dispatch => {
  const currToDo = todosRef.child(id)

  currToDo.transaction((todo) => {
    currToDo.update({completed: !todo.completed})
  })

}

export const editItem = (id, text) => async dispatch => {
  todosRef.child(id).update({text: text})
}

export const removeItem = id => async dispatch => {
  todosRef.child(id).remove()
}

export const toggleAll = isCompleteAll => async dispatch => {
  todosRef.once("value", snapshot => {
    Object.keys(snapshot.val()).map((key) => {
      const currChild = todosRef.child(key)
      return currChild.transaction(() => {
        currChild.update({completed: isCompleteAll})
      })
    })
  })
}

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter
})

