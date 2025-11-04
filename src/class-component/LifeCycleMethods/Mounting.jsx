import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount(){
        console.log("compount mounted!");
        
    }


  render() {
    return (
      <div>
        <p>component has been mounted</p>
      </div>
    )
  }
}
