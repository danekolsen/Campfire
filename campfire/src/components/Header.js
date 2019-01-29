import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <nav>
        <div  className="nav-wrapper container">
          <a href="#!" className="brand-logo">Campfire</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Activity Feed</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Network</a></li>
            <li><a href="#">Inbox<span class="new badge red">4</span></a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Header
