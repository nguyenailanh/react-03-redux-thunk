import React, {Component} from 'react'
import Edit from '../edit.svg'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }
  }

  componentDidUpdate () {
    this.refs['edit'].value = this.props.item.text
  }

  onKeyUpInputHandler (evt) {
    switch (evt.keyCode) {
      case 13:
        this.props.editItem(this.props.item, this.refs['edit'].value)
        this.setState({'editing': false})
        break
      case 27:
        this.setState({editing: false})
        break
      default:
    }
  }

  onFocusOutHandler () {
    this.setState({editing: false})
  }

  toggleEdit () {
    this.setState({editing: !this.state.editing}, () => {
      if (this.state.editing) {
        this.refs['edit'].focus()
      }
    })
  }

  changeStatus (evt) {
    this.props.changeStatus(this.props.item, evt.target.checked)
  }

  removeItem (evt) {
    this.props.removeItem(this.props.item)
  }

  render () {
    return (
      <li
        className={[
          this.props.item.completed ? 'todo completed' : 'todo',
          this.state.editing ? 'editing': ''
        ].join(' ')}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.item.completed}
            onChange={this.changeStatus.bind(this)}
          />
          <label>{this.props.item.text}</label>
          <button
            className="modify"
            onClick={this.toggleEdit.bind(this)}
          >
            <img src={Edit} alt="edit"/>
          </button>
          <button
            className="destroy"
            onClick={this.removeItem.bind(this)}
          >Delete</button>
        </div>
        <input
          ref="edit"
          className="edit"
          type="text"
          onKeyUp={this.onKeyUpInputHandler.bind(this)}
          onBlur={this.onFocusOutHandler.bind(this)}
        />
      </li>
    )
  }
}

export default Item