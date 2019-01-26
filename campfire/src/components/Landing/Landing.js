import React, { Component } from 'react'
import LinkedInLogin from './LinkedInLogin'

export class Landing extends Component {
  render() {
    return (
      <div style={landing_style} className="">
        <h1>Welcome to Campfire!</h1>
        <p className="flow-text"> One common flaw we've seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we've created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.

        To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference! </p>
        <LinkedInLogin />
      </div>
    )
  }
}

const landing_style={
  backgroundColor: '#4D7F99',
  textAlign: 'center'
}

export default Landing
