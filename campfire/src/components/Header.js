import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <nav style={navStyle}>
        <div  className="nav-wrapper container indigo">
          <a href="#!" style={logoStyle} className="brand-logo">Campfire</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Activity Feed</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Network</a></li>
            <li><a href="#">Inbox<span className="new badge red accent-2 ">4</span></a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

const logoStyle = {
  fontFamily: 'Pacifico, cursive'
}
const navStyle = {
  backgroundColor: '#3F51B5'
}


export default Header
