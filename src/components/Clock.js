import React, { Component } from 'react'

class Clock extends Component {
  runClock() {
    setInterval(this.startTime, 1000);
  }
  startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (h > 12) {
      h = h - 12
    }
    if (m < 10) {
      // @ts-ignore
      m = "0" + m;
    }
    if (s < 10) {
      // @ts-ignore
      s = "0" + s;
    }
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  }
  componentDidMount() {
    this.runClock();
  }
  render() {
    return (
      <div id="time"></div>
    )
  }
}
export default Clock;