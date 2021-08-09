import * as React from "react"

import Event from '../components/Events/eventscarousel'

const EventPage = () => {
    return (
        <div>
              <button type="button" className="grad border-2" >REGISTER NOW</button>
             <h1 className="text-center text-4xl italic" style={{fontFamily:"montserrat"}}>Events</h1>
             <Event></Event>
        </div>
    )
  }
  
  export default EventPage