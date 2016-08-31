import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState(){
    return {
      image_clicked: false
    }
  },
  onClickImage(e){
    // Ternary
    // These are used for "inline" "if" statements. They return values by default.
    //   to the left "?" is your assertion
    //   immediately to the right of the "?" (or left of ":") is if
    //     assertion is true
    //   and to the right of the ":" is if your assertion is false
    this.setState({
      image_clicked: this.state.image_clicked === true ? false : true
    });
  },
  render() {
    return (
      <main>
        <h2> Welcome back to your feed </h2>
        <Link to="/profile/jason"> View Jason's Profile </Link>
        <Link to="/profile/robin"> View Robin's Profile </Link>
        <img src="" className={ this.state.image_clicked === true? "image image--liked" : "image"} onClick={this.onClickImage} />
      </main>
    )
  }
})
