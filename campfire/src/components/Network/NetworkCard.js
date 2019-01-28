import React, { Component } from 'react'
import Image from "./dude.png"

export class NetworkCard extends Component {
  render() {
    return (
      <React.Fragment>
      <div class="card horizontal">
        <div class="card-image">
          <img style={cardImg} src={Image} />
        </div>
        <div class="card-stacked">
          <div class="card-content">
          <p>Role : {this.props.alum.role} </p> 
          <p>Company : {this.props.alum.company} </p> 
          <p>Location: {this.props.alum.location} </p> 
          <p>URL : {this.props.alum.url} </p>
          </div>
        </div>
      </div>
      </React.Fragment>









      // <div className="card indigo darken-3">
      //   <div className="card-content white-text">
      //     <div style={cardImg}>
      //       <img src="/dude.png" alt="user image" />
      //     </div>
      //     <div style={cardText}>
      //       <span className="card-title"> {this.props.alum.firstName} {this.props.alum.lastName} </span>         
      //       <p>Role : {this.props.alum.role} </p> 
      //       <p>Company : {this.props.alum.company} </p> 
      //       <p>Location: {this.props.alum.location} </p> 
      //       <p>URL : {this.props.alum.url} </p>
      //     </div>    
      //   </div>
      //   <div className="card-action">
      //     <a href="#">This is a link</a>
      //     <a href="#">This is a link</a>
      //   </div>
      // </div>
    )
  }
}

const cardImg = {
  height: '190px',
  width: '100px',
}

const cardText = {
  display: 'inline-block',
  height: '100%',
  width: '75%',
}


export default NetworkCard
