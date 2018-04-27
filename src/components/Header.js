import React, {Component} from 'react'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      newTodo: ''
    }
  }

  onChangeHanlder (evt) {
    this.setState({newTodo: evt.target.value})
  }

  toggleAll (evt) {
    this.props.toggleAll(evt.target.checked)
  }

  submitHandler (evt) {
    evt.preventDefault()

    if (this.state.newTodo === '') return

    this.props.addItem(this.state.newTodo)
    this.setState({newTodo: ''})
  }
  render () {
    return (
      <header className="header">
        <h3>Todo-Redux-Firebase</h3>
        <form
          action="#"
          method="post"
          onSubmit={this.submitHandler.bind(this)}
        >
          <input
            type="checkbox"
            className="toggle-all"
            onChange={this.toggleAll.bind(this)}
          />
          <input
            name="todo"
            ref="todo"
            className="new-todo"
            autoFocus
            autoComplete="off"
            placeholder="Input new to do here..."
            value={this.state.newTodo}
            onChange={this.onChangeHanlder.bind(this)}
          />
        </form>
      </header>
    )
  }
}

export default Header