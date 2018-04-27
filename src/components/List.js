import React, {Component} from 'react'
import Item from './Item'

class List extends Component {
  componentDidMount () {
    console.log('MOUNTED')
    this.props.fetchToDos()
  }

  render () {
    const {list, changeStatus, removeItem, editItem} = this.props
    return (
     <ul className="todo-list">
       {
         [...list].map((item, idx) => {
            return (<Item
                      item={item}
                      key={item.id}
                      changeStatus={changeStatus}
                      removeItem={removeItem}
                      editItem={editItem}
                    />)
         })
       }
     </ul>
    )
  }
}

export default List