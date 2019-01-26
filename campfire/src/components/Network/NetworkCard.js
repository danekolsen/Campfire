import React, { Component } from 'react'

export class NetworkCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <i className="material-icons circle">person</i>
              <span className="card-title"> {this.props.alum.firstName} {this.props.alum.lastName} </span>         
              <p>Role : {this.props.alum.role} </p> 
              <p>Company : {this.props.alum.company} </p> 
              <p>Location: {this.props.alum.location} </p> 
              <p>URL : {this.props.alum.url} </p>    
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NetworkCard
