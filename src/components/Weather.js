import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="text-primary">
        <h5>{this.props.weather.name} | {(Math.ceil(this.props.main.temp * 9 / 5 - 459.67))}<span>&#176;</span>F</h5>
        <p className="mb-n1 text-warning">{this.props.details.description}</p>
      </div>
    )
  }
}
export default Weather