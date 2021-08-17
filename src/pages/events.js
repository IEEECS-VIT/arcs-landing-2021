import * as React from "react"

import Event from '../components/Events/eventscarousel'
import Bg from '../components/Events/Bg'
import Carousel from '../components/Events/eventscarousel'

const EventPage = () => {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
                
             <h1 className="text-center text-4xl head ">Events</h1>
             <div className="flex justify-center">
             <button type="button" className="grad border-2 text-xl" >REGISTER NOW</button>
             </div>
            
             
             <Carousel items={items} active={0}/>
          </div>   
        
    )
  }
  
  export default EventPage