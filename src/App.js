// @ts-nocheck
import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import './RETRO-bootstrap.css';
import Quote from './components/Quote';
import Weather from './components/Weather';
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
    Axios.get('//bcw-sandbox.herokuapp.com/api/weather')
      .then(res => this.setState({
        weather: res.data,
        main: res.data.main,
        // main: ((res.data.main.temp - 273.15) * 1.8 + 32).toFixed(0),
        sys: res.data.sys,
        details: res.data.weather[0]
      }))
  }
  render() {
    return (
      <div id="apiImg" className="App text-secondary text-center container-fluid"
        style={{ backgroundImage: `url(${this.state.image})` }}>
        <div className="row">
          <div className="col window mt-2">
            <h1>inspire</h1>
          </div>
        </div>
        <div className="row justify-content-end mt-2 mr-1">
          <div className="col-3 window">
            <Weather
              weather={this.state.weather}
              main={this.state.main}
            />
          </div>
        </div>
        <marquee className="window text-center fixed-bottom mb-2">
          <Quote quote={this.state.quote} />
        </marquee>
      </div>
    );
  }
}

export default App;
