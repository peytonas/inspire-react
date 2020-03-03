import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="text-primary">
        <h3>{this.props.weather.name} | {(Math.ceil(this.props.main.temp * 9 / 5 - 459.67))}<span>&#176;</span>F</h3>
      </div>
    )
  }
}
export default Weather