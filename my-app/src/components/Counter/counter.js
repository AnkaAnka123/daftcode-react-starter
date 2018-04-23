import React from 'react'
import OnSuccess from './on-success'
import Buttons from './buttons'
import './counter.css'

class Timer extends React.Component {
  consturctor(props) {
  
    this.state = {
      timingEvents: []
    }
    this.addTimerEvent = this.addTimerEvent.bind(this)
    }

    addTimerEvent(){
    this.setState({
      timingEvents:[
        ...this.state.timingEvents,
        new Date()
      ]
    })
  }
  
  render() {
  return (
    <div className = 'container'>
      <OnSuccess 
       timingEvents = {this.state.timingEvents}/>
      <Buttons 
          handleClik={this.addTimerEvent}
          timingEvents = {this.state.timingEvents}
          />
    </div>
  )
}
}


export default Timer