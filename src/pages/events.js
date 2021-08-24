import * as React from "react"

import Event from '../components/Events/eventscarousel'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import rec1 from '../images/rec1.png'
import rec2 from '../images/rec2.png'
import smrec2 from '../images/smrec2.png'
import Carousel from '../components/Events/eventscarousel'
import border from '../images/border.png'

const EventPage = () => {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="md:mt-28 mt-10">
              <div className="fixed md:left-0 md:visible invisible">
                    <img src={rec1} className="h-44"></img>
              </div>
                 <div className="fixed md:right-48 -right-14 top-20 ">
                   <img src={c1} className="h-32"/>
                 </div> 
                 
             <div className="md:text-6xl head mt-5 flex justify-center text-4xl ">Events</div>
              
             <div className="flex justify-center md:mt-6 mt-20">
             <button type="button" className="grad border-4 md:text-xl py-2 px-5 text-l" >REGISTER NOW</button>
             </div>
            
            {/* <Carousel  items={items} active={0}/> */}
       
        <div className="fixed md:top-80 left-0 -top-11 ">
        <img src={c2}/>
        </div> 

            <div className="fixed md:left-60 md:bottom-0 md:visible invisible">
        <img src={c3}/>
         </div> 
        <div className="fixed md:right-96 md:bottom-2 md:left-auto bottom-6 left-8 ">
        <img src={c4} className="h-auto"/>
        </div> 
        <div className="fixed md:right-0 md:bottom-0 md:visible invisible ">
        <img src={rec2} className="h-44"></img>
              </div> 
           
           <div className="fixed right-0 bottom-0 md:invisible visible ">
           <img src={smrec2} className="h-32"></img>
        </div> 
        </div>       
        
    )
  }
  
  export default EventPage