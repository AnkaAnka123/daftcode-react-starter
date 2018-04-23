import React from 'react';

function onsuccess(events) {
  for(let i=0; i < events.lenght; i+=2){

    const start = events[i]
    const stop = events[i+1] || new Date();
   
  }
  return '00:00'
}

export default function OnSuccess(props) {
  return (
    <div className='success'>
    { onsuccess(props.timingEvents) }
    </div>
  )
}