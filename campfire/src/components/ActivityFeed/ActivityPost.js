import React, { Component } from 'react'

export class ActivityPost extends Component {
  render() {
    return (
    <li className="collection-item avatar">
      <i class="material-icons circle">person</i>
      <p>{this.props.post.user} {this.props.post.text} {this.props.post.at}</p>
      
    </li>
    )
  }
}

export default ActivityPost
