import React, {Component} from 'react'

class Footer extends Component {
  componentDidMount () {
    this.refs[this.props.filters[0].id].click()
  }
  render () {
    const {activeLength, filters, filterChange} = this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeLength} items</strong> left
        </span>
        <ul className="filters">
          <li><strong>Filters:</strong></li>
          {
            filters.map((item, idx) => {
              return (
                <li key={idx}>
                  <input
                    className="radio"
                    type="radio"
                    name="filter[]"
                    id={item.id}
                    value={item.id}
                    ref={item.id}
                    onChange={filterChange.bind(this, item.text)}
                  />
                  <label htmlFor={item.id}>{item.id}</label>
                </li>
              )
            })
          }
        </ul>
      </footer>
    )
  }
}

export default Footer