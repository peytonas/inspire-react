import React, { Component } from 'react'

class Quote extends Component {
  render() {
    return (
      <div className="text-primary" >
        <h3>"{this.props.quote.body} -{this.props.quote.author}"</h3>
      </div>
    )
  }
}
export default Quote;