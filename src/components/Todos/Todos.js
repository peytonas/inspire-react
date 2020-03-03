import React, { Component } from 'react';
import Todo from './Todo.js'
import PropTypes from 'prop-types'
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todo
        key={todo._id}
        todo={todo}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo} />
    ));
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos;