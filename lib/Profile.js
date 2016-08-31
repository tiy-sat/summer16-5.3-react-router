import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
  getDefaultProps(){
    return {
      users: {
        "jason": {
          username: "jason",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          signup_date: "This is so last week"
        },
        "robin": {
          username: "robin",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          signup_date: "not yet"
        }
      }
    }
  },
  render() {
    let currentUserObject = this.props.users[this.props.params.username];
    return (
      <main>
        <nav>
          <Link to="/">Go Home</Link>
        </nav>
        <h2> Here is { currentUserObject.username }s profile </h2>
        <p>
          {currentUserObject.bio}
        </p>
      </main>
    )
  }
})
