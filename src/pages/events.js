import * as React from "react"
import { useState } from "react";
import Navbar from "./../components/navbar";
import "../Events.scss"

import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import rec1 from '../images/rec1.png'
import rec2 from '../images/rec2.png'
import smrec2 from '../images/smrec2.png'
// import cyber from '../images/event1.png'
import Carousel from '../components/Events/eventscarousel'
import border from '../images/border.png'

const EventPage = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const items = [
    {
      title:"CYBER SECURITY",
      img:"event1"
    },
    {
      title:"UI/UX",
      img:"event1"
    },
    {
      title:"AI",
      img:"event1"
    },
    {
      title:"WEB DEV",
      img:"event1"
    },
    {
      title:"DESIGN",
      img:"event1"
    }

  ]
 
    return (
      <div>
      <Navbar isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
     
        <div className="md:mt-23 mt-10">
              <div className="fixed md:left-0 md:visible invisible">
                    <img src={rec1} alt="noo" className="h-44"></img>
              </div>
                 <div className="fixed md:right-48 -right-14 top-32 ">
                   <img src={c1} alt="noo" className="iphone5:h-24 h-32"/>
                 </div> 
                 <div className="w-full flex justify-center">
                    <div className="flex">
                    <img className="object-scale-down w-44 sm:w-52 md:w-64 visible lg:invisible h-24 iphone5:h-20 iphone5:w-40" src={border} alt="lines"/> 
                    <p style={{fontFamily:"Poppins"}} className="text-center text-4xl absolute  md:text-5xl  iphone5:text-3xl  mt-4 lg:ml-12 ml-8   ">
                        Events
                    </p>
                    </div>
                </div>   
          
              
             <div className="flex justify-center md:mt-2 mt-6 iphone5:mt-4">
             <button type="button" className="gradbox border-4 md:text-l py-2 px-3 text-base iphone5:text-sm" >REGISTER NOW</button>
             </div>
            
            <Carousel  items={items} active={0}/>
       
        <div className="fixed md:top-80 left-0 -top-11 md:visible  invisible ">
        <img src={c2} alt="noo"/>
        </div> 

            <div className="fixed md:left-60 md:bottom-0 md:visible invisible">
        <img src={c3} alt="noo"/>
         </div> 
        <div className="fixed md:right-96 md:bottom-2 md:left-auto bottom-6 left-8 ">
        <img src={c4} alt="noo" className="h-auto iphone5:h-12"/>
        </div> 
        <div className="fixed md:right-0 md:bottom-0 md:visible invisible ">
        <img src={rec2} alt="noo" className="h-44 "></img>
              </div> 
           
           <div className="fixed right-0 bottom-0 md:invisible visible ">
           <img src={smrec2}  alt="noo"className="h-32 iphone5:h-24"></img>
        </div> 
        </div>       
        </div>
    )
  }
  
  export default EventPage