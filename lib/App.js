import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        { this.props.children }
        <footer>
          <button>Home</button>
          <button>Home</button>
          <button>Home</button>
          <button>Home</button>
        </footer>
      </div>
    )
  }
})
