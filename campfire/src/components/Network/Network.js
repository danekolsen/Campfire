import React, { Component } from 'react'
import NetworkSearch from './NetworkSearch'
import NetworkCard from './NetworkCard'


export class Network extends Component {
 
  render() {
    const allAlumni = [
      {firstName: 'Dane1', lastName:'Olsen1', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd',location: 'San Jose', url: 'linkedin.com'},
      {firstName: 'Dane2', lastName:'Olsen2', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd', location: 'San Jose',url: 'linkedin.com'},
      {firstName: 'Dane3', lastName:'Olsen1', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd', location: 'San Jose', url: 'linkedin.com'},

    ]
    return allAlumni.map((alum) => (
            <NetworkCard key={alum.firstName} alum={alum} />
        ));
  }
}

export default Network
