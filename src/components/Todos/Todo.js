import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  Strikethrough = () => {
    return {
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none',
    }
  }
  render() {
    const { _id, description } = this.props.todo
    return (
      <div className="row">
        <div
          className="col"
          style={this.Strikethrough()}>
          <p>
            {/* <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, _id)}
            /> */}
            {description}
            <button
              className="btn btn-danger float-right mx-auto"
              onClick={this.props.deleteTodo.bind(this, _id)}>&times;</button>
          </p>
        </div>
      </div>
    )
  }
}
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
export default Todo