import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
  state = {
    description: ''
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value }); //Looks for change in Add Todo Input (looks at name or value)

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.description)
    this.setState({ description: '' })
  }
  render() {
    return (
      <form
        className="input-group mt-2"
        onSubmit={this.onSubmit}>
        <input
          className='form-control'
          type='text'
          name='description'
          placeholder='Add Todo...'
          value={this.state.description}
          onChange={this.onChange}
        />
        <input
          className='btn btn-secondary'
          type='submit'
          value='Submit'
        />
      </form>
    )
  }
}
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
export default AddTodo