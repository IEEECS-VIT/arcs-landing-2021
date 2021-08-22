import * as React from "react"

import Event from '../components/Events/eventscarousel'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import rec1 from '../images/rec1.png'
import rec2 from '../images/rec2.png'
import Carousel from '../components/Events/eventscarousel'

const EventPage = () => {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="mt-28">
              <div className="rec1">
                    <img src={rec1} style={{height:"10rem"}}></img>
              </div>
                 <div className="cir1">
                   <img src={c1}/>
                 </div> 
             <h1 className="text-center text-5xl head mt-5">Events</h1>
        
             <div className="flex justify-center mt-5">
             <button type="button" className="grad border-2 text-l pt-2 pb-2 px-2" >REGISTER NOW</button>
             </div>
            <Carousel  items={items} active={0}/>
       
        <div className="cir2">
        <img src={c2}/>
        </div> 

            <div className="cir3">
        <img src={c3}/>
         </div> 
        <div className="cir4">
        <img src={c4}/>
        </div> 
        <div className="rec2">
        <img src={rec2} style={{height:"10rem"}}></img>
              </div> 
          </div>   
        
    )
  }
  
  export default EventPage