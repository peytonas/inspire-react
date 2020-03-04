// @ts-nocheck
import React, { Component } from 'react';
import Axios from 'axios';
import swal from 'sweetalert2'
import './App.css';
import './RETRO-bootstrap.css';
import Quote from './components/Quote';
import Weather from './components/Weather';
import Todos from './components/Todos/Todos';
import AddTodo from './components/Todos/AddTodo';
import Clock from './components/Clock';
class App extends Component {
  state = {
    image: {},
    quote: {},
    weather: [],
    main: {},
    details: [],
    todos: []
  }
  componentDidMount() {
    Axios.get('//bcw-sandbox.herokuapp.com/api/images')
      .then(res => this.setState({
        image: res.data.large_url
      }))
    Axios.get('//bcw-sandbox.herokuapp.com/api/quotes')
      .then(res => this.setState({
        quote: res.data.quote
      }))
    Axios.get('//bcw-sandbox.herokuapp.com/api/weather')
      .then(res => this.setState({
        weather: res.data,
        main: res.data.main,
        details: res.data.weather[0]
      }))
    Axios.get('https://bcw-sandbox.herokuapp.com/api/peyton/todos')
      .then(res => this.setState({ todos: res.data.data }),
        document.getElementById('todo-counter').innerHTML = "Total: " + this.state.todos.length)
  }
  addTodo = (description) => {
    // @ts-ignore
    const toast = swal.mixin({
      toast: true,
      position: "top-left",
      showConfirmButton: false,
      timer: 2000
    });
    Axios.post('https://bcw-sandbox.herokuapp.com/api/peyton/todos/', {
      description: description,
      completed: false
    })
      .then(res => this.setState({
        todos:
          [...this.state.todos, res.data.data]
      }),
        toast.fire(
          'Created!', "",
          'success'
        )
      )
  }
  deleteTodo = (_id) => {
    const toast = swal.mixin({
      toast: true,
      position: "top-left",
      showConfirmButton: false,
      timer: 2000
    });
    // @ts-ignore
    swal.fire({
      text: "Are you sure?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    Axios.delete(`https://bcw-sandbox.herokuapp.com/api/peyton/todos/${_id}`)
      .then(res => this.setState({
        todos:
          [...this.state.todos.filter(todo => todo._id !== _id)]
      }),
        toast.fire(
          'Deleted!', "",
          'success'
        )
      )
  }
  markComplete = (_id) => {
    // @ts-ignore
    const toast = swal.mixin({
      toast: true,
      position: "top-left",
      showConfirmButton: false,
      timer: 2000
    });
    Axios.put(`https://bcw-sandbox.herokuapp.com/api/peyton/todos/${_id}`)
      .then(this.setState({

        todos: this.state.todos.map(todo => {
          if (todo._id === _id) {
            todo.completed = !todo.completed
            toast.fire(
              'Complete!', "",
              'success'
            )
          } else {
            toast.fire(
              'Incomplete!', "",
              'error'
            )
          }
          return todo;
        })
      })
      )
  }
  render() {
    return (
      <div id="apiImg" className="App eightBit text-secondary text-center container-fluid"
        style={{ backgroundImage: `url(${this.state.image})` }}>
        <div className="row">
          <div className="col topWindow mt-1 text-secondary">
            <h3>Hello, Peyton.</h3>
          </div>
        </div>
        <div className="row justify-content-between mt-1">
          <div className="col-3 midWindow">
            <h4 className="mt-2"><Clock /></h4>
          </div>
          <div className="col-3 midWindow">
            <Weather
              weather={this.state.weather}
              main={this.state.main}
              details={this.state.details}
            />
          </div>
        </div>
        <div className="row justify-content-end mt-1">
          <div className="col-4 midWindow overflow">
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              deleteTodo={this.deleteTodo} />
            <AddTodo
              addTodo={this.addTodo} />
            <div id="todo-counter" className="mt-1"></div>
          </div>
        </div>
        <marquee className="bottomWindow text-center fixed-bottom mb-1">
          <Quote quote={this.state.quote} />
        </marquee>
      </div>
    );
  }
}

export default App;