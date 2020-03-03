// @ts-nocheck
import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import './RETRO-bootstrap.css';
import Quote from './components/Quote'
class App extends Component {
  state = {
    image: {},
    quote: {},
    weather: [],
    main: {},
    sys: {},
    details: [],
    // date: new Date(),
    todos: []

  }
  componentDidMount() {
    // GET BACKGROUND IMAGE
    Axios.get('//bcw-sandbox.herokuapp.com/api/images')
      .then(res => this.setState({
        image: res.data.large_url
      }))
    Axios.get('//bcw-sandbox.herokuapp.com/api/quotes')
      .then(res => this.setState({
        quote: res.data.quote
      }))
  }
  render() {
    return (
      <div id="apiImg" className="App text-secondary text-center container-fluid"
        style={{ backgroundImage: `url(${this.state.image})` }}>
        <div className="window">
          <h1>inspire</h1>
        </div>
        <marquee className="window text-center fixed-bottom">
          <Quote quote={this.state.quote} />
        </marquee>
      </div>
    );
  }
}

export default App;
