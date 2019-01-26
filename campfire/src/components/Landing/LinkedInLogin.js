import React, { Component } from 'react'

export class LinkedInLogin extends Component {
  render() {
    return (
      <div>
        <a onClick="" href="#" style={linkedin_btn}className="waves-effect waves-light btn-large"><i className="fab fa-linkedin"></i>  Login with LinkedIn</a>
      </div>
    )
  }
}

const linkedin_btn={
  backgroundColor: '#0077b5',
  fontSize: '20px',
  textCenter: 'center'
}


export default LinkedInLogin
